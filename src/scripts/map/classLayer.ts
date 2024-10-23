import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Circle, Text } from "ol/style.js";
import group from "@/types/group";

export default class BaseClassLayer<T> {
  name: string;

  constructor(settings: { name: string }) {
    this.name = settings.name;
  }

  CreateFeatures = (items: T, year: number, indicator: string) => {
    const copy = JSON.parse(JSON.stringify(items));

    const features = copy.map((item: chemistryPoint) => {
      const qualityType = item.data[year].qualityType || "1";

      const value = item.data[year][indicator] || 0;

      let color = "#EFA94A";

      let radius = 20;

      if (indicator == "qualityType") {
        color = group.get(qualityType.toString()) || "#000";
      } else {
        radius = 20 + 3 * +value * 0.5;
      }

      const fill = new Fill({
        color: color,
      });

      const image = new Circle({
        fill,
        radius,
      });

      const iconFeature = new Feature({
        geometry: new Point(fromLonLat(item.position)),
        data: item.data,
        year: year,
        name: item.samplingLocation,
        zIndex: Math.round(+value),
      });

      const text = new Text({
        text: value.toString(),
        font: "1rem Helvetica",
      });

      const style = new Style({
        image,
        text,
        zIndex: Math.round(+value),
      });

      iconFeature.setStyle(style);

      return iconFeature;
    });

    return features;
  };

  CreateSource(features: []) {
    const vector = new VectorSource({
      features,
    });

    return vector;
  }

  CreateLayer(items: T, year: number, indicator: string, name: string) {
    const features = this.CreateFeatures(items, year, indicator);
    const source = this.CreateSource(features);

    const vectorLayer = new VectorLayer({
      declutter: true,
      visible: false,
      source: source,
    });

    vectorLayer.set("year", year);
    vectorLayer.set("indicator", indicator);
    vectorLayer.set("name", name);

    return vectorLayer;
  }
}
