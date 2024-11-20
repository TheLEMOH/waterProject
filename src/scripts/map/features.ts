import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Circle, Text, Stroke } from "ol/style.js";
import { groupBiology, groupChemistry } from "@/types/group";

interface FeatureChemistryProps {
  items: chemistryArray;
  year: number;
  indicator: string;
}

interface FeatureBiologyProps {
  items: chemistryArray;
  indicator: string;
}

export const CreateFeaturesChemystry = ({
  items,
  year,
  indicator,
}: FeatureChemistryProps) => {
  const copy = JSON.parse(JSON.stringify(items));

  const features = copy.map((item: chemistryPoint, index: number) => {
    const qualityType = item.data[2010].УКИЗВ || "1";

    const value = item.data[2010][indicator] || 0;

    let color = "#EFA94A";

    let radius = 20;

    if (indicator == "УКИЗВ") {
      color = groupChemistry.get(qualityType.toString()) || "#000";
    } else {
      radius = 20 + 3 * +value * 0.5;
    }

    const fill = new Fill({
      color: color,
    });

    const stroke = new Stroke({
      color: "#000",
      width: 2,
    });

    const image = new Circle({
      fill,
      stroke,
      radius,
    });

    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(item.position)),
      data: item.data,
      year: year,
      name: item.samplingLocation,

    });

    const text = new Text({
      text: value.toString(),
      font: "1rem Helvetica",
    });

    const style = new Style({
      image,
      text,
      zIndex: index,
    });

    iconFeature.setStyle(style);

    return iconFeature;
  });

  return features;
};

export const CreateFeaturesBiology = ({
  items,
  indicator,
}: FeatureBiologyProps) => {
  const copy = JSON.parse(JSON.stringify(items));
  const features = copy.map((item: biologyPoint, index: number) => {
    const qualityType = item.data["Категория качества вод"] || "1";

    const value = item.data[indicator] || 0;

    let color = "#EFA94A";

    let radius = 20;

    if (indicator == "IP") {
      color = groupBiology.get(qualityType.toString()) || "#000";
    } else {
      radius = 20 + 1 * +value * 0.1;
    }

    const fill = new Fill({
      color: color,
    });

    const stroke = new Stroke({
      color: "#000",
      width: 2,
    });

    const image = new Circle({
      fill,
      stroke,
      radius,
    });

    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(item.position)),
      data: item.data,
      radius: radius,
      name: item.samplingLocation,
      declutter: false
    });

    const text = new Text({
      text: value.toString(),
      font: "1rem Helvetica",
      declutterMode: 'obstacle',
      overflow: true
    });

    const style = new Style({
      image,
      text,
      zIndex: index,
    });

    iconFeature.setStyle(style);

    return iconFeature;
  });

  return features;
};
