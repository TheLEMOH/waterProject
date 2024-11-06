<script setup lang="ts">
import Map from "@/components/Map/Map.vue";
import Slider from "@/components/Slider/Slider.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import IndicatorMenu from "@/components/Indicator/IndicatorMenu.vue";
import Layers from "@/scripts/map/map";

import Legend from "@/components/Legend/Legend.vue";
import chemistry from "@/datasets/db_c.json";
import biology from "@/datasets/db_b.json";

import { provide, ComputedRef } from "vue";
import {
  CreateLayersChemistry,
  CreateLayersBiology,
} from "@/scripts/map/generatorLayers";

import useIndicators from "@/views/Map/composables/useIndicator";
import usePoint from "@/views/Map/composables/usePoint";
import useYear from "./composables/useYear";
import useNameRoute from "./composables/useNameRoute";
import useDegree from "./composables/useDegree";
import useGroup from "./composables/useGroup";

const { nameRoute } = useNameRoute();
const { selectedPoint, setSelectedPoint } = usePoint();
const { selectedYear } = useYear(nameRoute);
const { selectedDegree } = useDegree(nameRoute);
const { selectedGroup } = useGroup(nameRoute);
const { indicators, selectedIndicator, indicatorsHtml } = useIndicators(
  [chemistry, biology],
  nameRoute
);
const LayerModuleChemistry = new Layers({ generator: CreateLayersChemistry });
const LayerModuleBiology = new Layers({ generator: CreateLayersBiology });

const layerChemistry = LayerModuleChemistry.CreateLayers<chemistryArray>({
  dataset: chemistry,
});

const layerBiologi = LayerModuleBiology.CreateLayers<biologyArray>({
  dataset: biology,
});

if (nameRoute.value == "chemistry") {
  layerChemistry.setVisible(true);
}

if (nameRoute.value == "biology") {
  layerBiologi.setVisible(true);
}

const layers = [layerChemistry, layerBiologi];

provide("selectedPoint", { selectedPoint, setSelectedPoint });
provide("indicator", { indicators, selectedIndicator, indicatorsHtml });
provide("year", { selectedYear });
provide("layers", layers);
provide<ComputedRef<string | symbol>>("nameRoute", nameRoute);
</script>

<template>
  <Transition name="fade" mode="out-in">
    <Legend
      :degree="selectedDegree"
      :group="selectedGroup"
      v-if="
        (selectedIndicator == 'IP' || selectedIndicator == 'УКИЗВ') &&
        (nameRoute == 'chemistry' || nameRoute == 'biology')
      "
    ></Legend>
  </Transition>

  <Transition name="fade" mode="out-in">
    <Slider
      :selectedYear="selectedYear"
      @update="selectedYear = $event"
      v-if="indicators && nameRoute == 'chemistry'"
    ></Slider>
  </Transition>

  <Transition name="fade" mode="out-in">
    <IndicatorMenu
      :indicators="indicators"
      :selectedProject="nameRoute"
      :selectedIndicator="selectedIndicator"
      :indicators-html="indicatorsHtml"
      @select="selectedIndicator = $event"
      v-if="indicators"
    ></IndicatorMenu>
  </Transition>

  <Sidebar></Sidebar>

  <Map></Map>
</template>
