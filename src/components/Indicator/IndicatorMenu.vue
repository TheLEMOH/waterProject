<script setup lang="ts">
import { ref } from "vue";

import chemistry from "@/dictonary/chemistry";
import biology from "@/dictonary/biology";

interface Props {
  indicators?: Indicators | null;
  selectedProject?: string | symbol;
  selectedIndicator?: string | null;
}

interface Dictonaries {
  [key: string | symbol]: Dictonary;
}

const props = withDefaults(defineProps<Props>(), {
  indicators: null,
  selectedProject: "chemistry",
  selectedIndicator: null,
});

const dictonaries = ref<Dictonaries>({ chemistry, biology });

const emits = defineEmits(["select"]);
</script>

<template>
  <div class="indicator-menu">
    <div class="indicator-item" v-for="indicator in props.indicators">
      <v-btn
        block
        class="text-subtitle-2"
        :ripple="false"
        size="small"
        :key="indicator"
        :color="
          indicator == props.selectedIndicator ? 'indigo-darken-3' : 'white'
        "
        @click="emits('select', indicator)"
      >
        {{ dictonaries[selectedProject][indicator] }}
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
