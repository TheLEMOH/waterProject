interface dataBiology {
  H: number | null;
  n: number | null;
  EPTN: number | null;
  "EPTN%": number | null;
  "ЕРТN/ChN": number | null;
  EPTn: number | null;
  "ЕРТn/Chn": number | null;
  К: number | null;
  FBI: number | null;
  BMWP: number | null;
  ASPT: number | null;
  IBGN: number | null;
  G: number | null;
  ip: number | null;
  qualityType: number | null;
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
