export interface Group {
  [key: string]: string;
}

export const groupChemistry = new Map<string, string>([
  ["1", "#ebf1de"],
  ["2", "#95b3d7"],
  ["3", "#92d050"],
  ["3а", "#92d050"],
  ["3б", "#ffff00"],
  ["4", "#ff6600"],
  ["4а", "#ff6600"],
  ["4в", "#E53935"],
]);

export const groupBiology = new Map<string, string>([
  ["1", "#9bc2e6"],
  ["2", "#92d050"],
  ["3", "#ffff00"],
  ["4", "#ff6600"],
]);
