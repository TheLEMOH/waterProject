<script setup lang="ts">
import Map from "@/components/Map/Map.vue";
import Slider from "@/components/Slider/Slider.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import IndicatorMenu from "@/components/Indicator/IndicatorMenu.vue";
import LayerModule from "@/scripts/map/map";
import Legend from "@/components/Legend/Legend.vue";
import chemistry from "@/datasets/db_c.json";

import { provide, ComputedRef } from "vue";

import useIndicators from "@/views/Map/composables/useIndicator";
import usePoint from "@/views/Map/composables/usePoint";
import useYear from "./composables/useYear";
import useNameRoute from "./composables/useNameRoute";

const { nameRoute } = useNameRoute();
const { selectedPoint, setSelectedPoint } = usePoint();
const { selectedYear } = useYear();
const { indicators, list, selectedIndicator } = useIndicators(
  chemistry,
  nameRoute
);

const layersChemistry = LayerModule.CreateLayers(chemistry, list["chemistry"]);
/* const layersBiologi = LayerModule.CreateLayers(chemistry, list["chemistry"]); */

const layers = [...layersChemistry];

provide("selectedPoint", { selectedPoint, setSelectedPoint });
provide("indicator", { indicators, selectedIndicator });
provide("year", { selectedYear });
provide("layers", layers);
provide<ComputedRef<string | symbol>>("nameRoute", nameRoute);
</script>

<template>
  <Transition name="fade" mode="out-in">
    <Legend
      v-if="selectedIndicator == 'qualityType' && nameRoute == 'chemistry'"
    ></Legend>
  </Transition>

  <Transition name="fade" mode="out-in">
    <Slider
      :selectedYear="selectedYear"
      @update="selectedYear = $event"
      v-if="indicators"
    ></Slider>
  </Transition>

  <Transition name="fade" mode="out-in">
    <IndicatorMenu
      :indicators="indicators"
      :selectedIndicator="selectedIndicator"
      @select="selectedIndicator = $event"
      v-if="indicators"
    ></IndicatorMenu>
  </Transition>

  <Sidebar></Sidebar>

  <Map></Map>
</template>
