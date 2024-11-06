import BaseClassLayer from "./classLayer";
import { CreateFeaturesChemystry, CreateFeaturesBiology } from "./features";

interface Props<T> {
  dataset: T;
}

export const CreateLayersChemistry = <T>({ dataset }: Props<T>) => {
  return new BaseClassLayer<T>({
    name: `chemistry`,
    generatorfeatures: CreateFeaturesChemystry,
  }).CreateLayer({
    items: dataset,
    indicator: "УКИЗВ",
    name: "chemistry",
  });
};

export const CreateLayersBiology = <T>({ dataset }: Props<T>) => {
  return new BaseClassLayer<T>({
    name: `biology `,
    generatorfeatures: CreateFeaturesBiology,
  }).CreateLayer({
    indicator: "IP",
    items: dataset,
    name: "biology",
  });
};
