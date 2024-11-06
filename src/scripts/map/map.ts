interface Props<T> {
  dataset: T;
}

class Layers {
  CreateLayer: Function;

  constructor(settings: { generator: Function }) {
    this.CreateLayer = settings.generator;
  }

  CreateLayers<T>({ dataset }: Props<T>) {
    return this.CreateLayer({ dataset });
  }
}

export default Layers;
