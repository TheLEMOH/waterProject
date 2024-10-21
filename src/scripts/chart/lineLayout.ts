export default {
  grid: { left: "5%", right: "5%", bottom: "10%", top: "10%" },
  xAxis: {
    type: "category",
    splitLine: {
      lineStyle: {
        color: "#eee",
      },
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: "#eee",
      },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
};
