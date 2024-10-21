import { Style, Fill, Circle } from "ol/style.js";

export default function clusterStyle(cluster: any) {
  const features = cluster.get("features");
  const length = features.length;

  let sum = 0;

  features.forEach((feature: any) => {
    const year = feature.get("year");
    const data = feature.get("data")[year]["Fe"];

    sum += data;
  });

  const avg = sum / length;

  const fill = new Fill({
    color: "#fff",
  });

  const image = new Circle({
    fill,
    radius: 20 + 5 * avg * 0.5,
  });

  const style = new Style({
    image,
  });

  return style;
}
