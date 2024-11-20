import { Style, Fill, Circle, Text, Stroke } from "ol/style.js";
import { groupBiology, groupChemistry } from "@/types/group";
import { Feature } from "ol";

interface StyleChemistryProps {
  feature: Feature;
  year: number;
  index: number;
  indicator: string;
  radius?: number;
  color?: string;
}

interface StyleBiologyProps {
  feature: Feature;
  indicator: string;
  index: number;
  radius?: number;
  color?: string;
}

export const styleBiology = ({
  feature,
  index,
  indicator,
  radius = 20,
  color = "#EFA94A",
}: StyleBiologyProps) => {
  const data = feature.get("data");
  const qualityType = data["Категория качества вод"] || "1";
  const value = data[indicator] || 0;

  if (indicator == "IP") {
    color = groupBiology.get(qualityType.toString()) || "#000";
  } else {
    radius = 20 + 1 * +value * 0.1;
  }

  return new Style({
    image: new Circle({
      fill: new Fill({ color }),
      stroke: new Stroke({ color: "#000", width: 2 }),
      radius,
    }),
    text: new Text({ text: value.toString(), font: "1rem Helvetica" }),
    zIndex: index,
  });
};

export const styleChemistry = ({
  feature,
  index,
  year,
  indicator,
  radius = 20,
  color = "#EFA94A",
}: StyleChemistryProps): Style => {
  const data = feature.get("data");
  const qualityType = data[year].УКИЗВ || "1";
  const value = data[year][indicator] || 0;

  if (indicator == "УКИЗВ") {
    color = groupChemistry.get(qualityType.toString()) || "#000";
  } else {
    radius = 20 + 3 * +value * 0.5;
  }

  return new Style({
    image: new Circle({
      fill: new Fill({ color }),
      stroke: new Stroke({ color: "#000", width: 2 }),
      radius,
    }),
    text: new Text({ text: value.toString(), font: "1rem Helvetica" }),
    zIndex: index,
  });
};
