interface Props<T> {
  dataset: T;
  indicators: Indicators;
}

class Layers {
  CreateLayer: Function;

  constructor(settings: { generator: Function }) {
    this.CreateLayer = settings.generator;
  }

  CreateLayers<T>({ dataset, indicators }: Props<T>) {
    return this.CreateLayer({ dataset, indicators });
  }
}

export default Layers;
