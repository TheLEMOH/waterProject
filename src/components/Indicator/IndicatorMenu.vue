<script setup lang="ts">
interface Props {
  indicators?: Indicators | null;
  selectedProject?: string | symbol;
  selectedIndicator?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  indicators: null,
  selectedProject: "chemistry",
  selectedIndicator: null,
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
  <div class="indicator-menu">
    <div class="indicator-item" v-for="(indicator, index) in props.indicators">
      <v-btn
        block
        class="text-subtitle-2"
        :ripple="false"
        size="small"
        :key="indicator"
        :color="color(indicator, index)"
        @click="emits('select', indicator)"
      >
        {{ indicator }}
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
