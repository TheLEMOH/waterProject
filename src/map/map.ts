import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Circle, Text } from "ol/style.js";
import group from "@/group/group";

export default class BaseClassLayer {
  name: string;

  constructor(settings: { name: string }) {
    this.name = settings.name;
  }

  CreateFeatures = (items: any, year: number, indicator: string) => {
    const copy = JSON.parse(JSON.stringify(items));

    const features = copy.map((item: any) => {
      const qualityType: string = item.data[year].qualityType || 1;
      const value: number = item.data[year][indicator] || 0;

      const color = group[qualityType] || "#fff";

      const fill = new Fill({
        color: color,
      });

      const image = new Circle({
        fill,
        radius: 20 + 3 * value * 0.5,
      });

      const iconFeature = new Feature({
        geometry: new Point(fromLonLat(item.position)),
        data: item.data,
        year: year,
        name: item.samplingLocation,
        zIndex: Math.round(value),
      });

      const text = new Text({
        text: value.toString(),
        font: "1rem Helvetica",
      });

      const style = new Style({
        image,
        text,
        zIndex: Math.round(value),
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

    /* 
    const clusterSource = new Cluster({
      distance: 10,
      minDistance: 10,
      source: vector,
    }); */

    return vector;
  }

  CreateLayer(items: any, year: number, indicator: string) {
    const features = this.CreateFeatures(items, year, indicator);
    const source = this.CreateSource(features);

    const vectorLayer = new VectorLayer({
      declutter: true,
      visible: false,
      source: source,
    });

    vectorLayer.set("year", year);
    vectorLayer.set("indicator", indicator);

    return vectorLayer;
  }
}
