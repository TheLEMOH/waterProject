<script setup lang="ts">
import { ref, watch } from "vue";

import { SeriesOption } from "echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

import VChart from "vue-echarts";

const props = defineProps<{
  options?: Object;
  series?: SeriesOption[];
}>();

const option = ref({
  ...props.options,
  series: props.series,
});

watch(
  () => props.series,
  (value) => {
    option.value.series = value;
  }
);
</script>

<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<style>
.chart {
  height: 300px;
  width: 100%;
}
</style>
