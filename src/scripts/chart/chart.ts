import { SeriesOption } from "echarts";

class CreateChartSeries {
  lineChart(
    rawData: any,
    x: string,
    y: string,
  ): SeriesOption {
    const data: number[][] = rawData.map((element: any) => {
      return { value: [element[x], element[y]] };
    });

    return {
      data: data,
      name: y,
      barGap: 0,
      type: "bar",
      showBackground: true,
    };
  }
}

const chartModule = new CreateChartSeries();

export default chartModule;
