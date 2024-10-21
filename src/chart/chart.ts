class CreateChartSeries {
  lineChart(rawData: any, x: string, y: string, group: any, groups: any) {
    const data: number[][] = rawData.map((element: any) => {
      const color = groups[element[group]];

      return { value: [element[x], element[y]], itemStyle: { color } };
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
