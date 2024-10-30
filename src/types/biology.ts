interface dataBiology {
  [key: string]: string | number | null;
}

interface biologyPoint {
  data: dataBiology;
  position: Array<number>;
  id: string | number;
  section: string;
  samplingLocation: string;
  km: string;
  station: string;
}

interface biologyArray extends Array<biologyPoint> {}
