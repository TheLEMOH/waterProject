import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import BaseClassLayer from "./classLayer";

class Layers {
  CreateLayers(dataset: chemistryArray, indicators: Indicators) {
    const layers: VectorLayer<VectorSource<never>, never>[] = [];

    for (let i = 2010; i <= 2022; i++) {
      for (let j = 0; j < indicators.length; j++) {
        layers.push(
          new BaseClassLayer<chemistryArray>({
            name: `chemistry`,
          }).CreateLayer(dataset, i, indicators[j])
        );
      }
    }

    return layers;
  }
}

const LayerModule = new Layers();

export default LayerModule;
