import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

export default class BaseClassLayer<T> {
  name: string;
  CreateFeatures: Function;

  constructor(settings: { name: string; generatorfeatures: Function }) {
    this.name = settings.name;
    this.CreateFeatures = settings.generatorfeatures;
  }

  CreateSource(features: []) {
    const vector = new VectorSource({
      features,
    });

    return vector;
  }

  CreateLayer({
    items,
    year,
    indicator,
    name,
  }: {
    items: T;
    year: number;
    indicator: string;
    name: string;
  }) {
    const features = this.CreateFeatures({ items, year, indicator });
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
