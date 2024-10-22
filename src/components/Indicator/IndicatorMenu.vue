<script setup lang="ts">
import chemistry from "@/dictonary/chemistry";

interface Props {
  indicators?: Indicators | null;
  selectedIndicator?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  indicators: null,
  selectedIndicator: null,
});

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
        {{ chemistry[indicator] }}
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
