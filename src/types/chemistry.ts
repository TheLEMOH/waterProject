interface year {
  [key: string]: string | number | null;
}

interface dataChemistry {
  [key: string]: year;
}

/* type Data = Record<string, year>; */

interface chemistryPoint {
  id: string | number;
  samplingLocation: string;
  position: Array<number>;
  description: string;
  data: dataChemistry;
}

interface chemistryArray extends Array<chemistryPoint> {}
