import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Circle, Text } from "ol/style.js";
import group from "@/types/group";
import groupBiology from "@/types/groupBiology";

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

export const CreateFeaturesBiology = ({
  items,
  indicator,
}: FeatureBiologyProps) => {
  const copy = JSON.parse(JSON.stringify(items));

  const features = copy.map((item: chemistryPoint) => {
    const qualityType = item.data.qualityType || "1";

    const value = item.data[indicator] || 0;

    let color = "#EFA94A";

    let radius = 20;

    if (indicator == "qualityType" || indicator == "ip") {
      color = groupBiology.get(qualityType.toString()) || "#000";
    } else {
      radius = 20 + 1 * +value * 0.1;
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
