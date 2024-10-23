interface year {
  [key: string]: string | number | null;
  qualityType: string | number | null;
  ХПК: number | null;
  БПК5: number | null;
  N_NH4: number | null;
  N_NO2: number | null;
  Fe: number | null;
  Cu: number | null;
  Zn: number | null;
  Cd: number | null;
  Al: number | null;
  Mn: number | null;
  Ni: number | null;
  phenols: number | null;
  oilProducts: number | null;
  СПАВ: number | null;
  "a-ГХЦГ": number | null;
  "Y-ГХЦГ": number | null;
}

interface data {
  [key: string]: year;
}

/* type Data = Record<string, year>; */

interface chemistryPoint {
  id: string | number;
  samplingLocation: string;
  position: Array<number>;
  description: string;
  data: data;
}

interface chemistryArray extends Array<chemistryPoint> {}
