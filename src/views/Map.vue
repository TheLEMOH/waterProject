<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Map = defineAsyncComponent(() => import("@/components/Map/Map.vue"));
const Sidebar = defineAsyncComponent(
  () => import("@/components/Sidebar/Sidebar.vue")
);
const Slider = defineAsyncComponent(
  () => import("@/components/Slider/Slider.vue")
);
const IndicatorMenu = defineAsyncComponent(
  () => import("@/components/Indicator/IndicatorMenu.vue")
);

import chemistry from "@/datasets/db_c.json";
import { provide, ref } from "vue";

const selectedPoint = ref(null);
const selectedIndicator = ref("ХПК");
const selectedYear = ref(2010);

const indicators = Object.keys(chemistry[0].data[2010]);
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
