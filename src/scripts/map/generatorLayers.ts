import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import BaseClassLayer from "./classLayer";
import { CreateFeaturesChemystry, CreateFeaturesBiology } from "./features";

interface Props<T> {
  dataset: T;
  indicators: Indicators;
}

export const CreateLayersChemistry = <T>({ dataset, indicators }: Props<T>) => {
  const layers: VectorLayer<VectorSource<never>, never>[] = [];

  for (let i = 2010; i <= 2022; i++) {
    for (let j = 0; j < indicators.length; j++) {
      layers.push(
        new BaseClassLayer<T>({
          name: `chemistry ${i} ${indicators[j]}`,
          generatorfeatures: CreateFeaturesChemystry,
        }).CreateLayer({
          items: dataset,
          year: i,
          indicator: indicators[j],
          name: "chemistry",
        })
      );
    }
  }

  return layers;
};

export const CreateLayersBiology = <T>({ dataset, indicators }: Props<T>) => {
  const layers: VectorLayer<VectorSource<never>, never>[] = [];

  for (let j = 0; j < indicators.length; j++) {
    layers.push(
      new BaseClassLayer<T>({
        name: `biology ${indicators[j]}`,
        generatorfeatures: CreateFeaturesBiology,
      }).CreateLayer({
        items: dataset,
        indicator: indicators[j],
        year: 2010,
        name: "biology",
      })
    );
  }

  return layers;
};
