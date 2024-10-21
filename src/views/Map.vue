<script setup lang="ts">
import Map from "@/components/Map/Map.vue";
import Slider from "@/components/Slider/Slider.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import IndicatorMenu from "@/components/Indicator/IndicatorMenu.vue";

import chemistry from "@/datasets/db_c.json";
import { provide, ref } from "vue";

const selectedPoint = ref<chemistryPoint | null>(null);
const selectedIndicator = ref<string>("ХПК");
const selectedYear = ref<number>(2010);

const indicators: Indicators = Object.keys(chemistry[0].data[2010]);
indicators.splice(0, 1);

const setSelectedPoint = (point: any) => {
  selectedPoint.value = point;
};

provide("selectedPoint", { selectedPoint, setSelectedPoint });
provide("indicator", { indicators, selectedIndicator });
provide("year", { selectedYear });
</script>

<template>
  <Slider @update="selectedYear = $event"></Slider>
  <IndicatorMenu
    :indicators="indicators"
    :selectedIndicator="selectedIndicator"
    @select="selectedIndicator = $event"
  ></IndicatorMenu>
  <Sidebar></Sidebar>
  <Map></Map>
</template>
