export interface Group {
  [key: string]: string;
}

/* const group: Group = {
  "1": "#ebf1de",
  "2": "#95b3d7",
  "3": "#92d050",
  "3а": "#92d050",
  "3б": "#ffff00",
  "4": "#ff6600",
  "4а": "#ff6600",
  "4в": "#ff6600",
}; */

 const group = new Map<string, string>([
  ["1", "#ebf1de"],
  ["2", "#95b3d7"],
  ["3", "#92d050"],
  ["3а", "#92d050"],
  ["3б", "#ffff00"],
  ["4", "#ff6600"],
  ["4а", "#ff6600"],
  ["4в", "#ff6600"],
]); 

export default group;
