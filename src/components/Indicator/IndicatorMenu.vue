<script setup lang="ts">
import { IndicatorHtml } from "@/types/indicatorHTML";

interface Props {
  indicators?: Indicators | null;
  selectedProject?: string | symbol;
  selectedIndicator?: string | null;
  indicatorsHtml?: IndicatorHtml | null;
}

const props = withDefaults(defineProps<Props>(), {
  indicators: null,
  selectedProject: "chemistry",
  selectedIndicator: null,
  indicatorsHtml: null,
});

const emits = defineEmits(["select"]);

const color = (indicator: string, index: number) => {
  if (index == 0 && props.selectedIndicator != indicator)
    return "orange-lighten-1";

  if (props.selectedIndicator == indicator) {
    return "indigo-darken-3";
  }

  return "white";
};
</script>

<template>
  <div class="indicator-menu" v-if="indicatorsHtml">
    <div class="indicator-item" v-for="(indicator, index) in props.indicators">
      <v-btn block class="text-subtitle-2" :ripple="false" size="small" :key="indicator"
        :color="color(indicator, index)" @click="emits('select', indicator)">
        <span v-html="indicatorsHtml[indicator]"></span>
      </v-btn>
    </div>
  </div>
</template>

<style>
.indicator-menu {
  width: 140px;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 100;
  padding: 5px;
  bottom: 0;
  right: calc(var(--v-layout-right));
  transition: all 0.2s;
}
</style>
