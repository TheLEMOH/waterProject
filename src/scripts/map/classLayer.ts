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
    name,
    indicator,
  }: {
    items: T;
    name: string;
    indicator: string;
  }) {
    const features = this.CreateFeatures({ items, indicator });
    const source = this.CreateSource(features);

    const vectorLayer = new VectorLayer({
      visible: false,
      source: source,
    });

    vectorLayer.set("name", name);

    return vectorLayer;
  }
}
