<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  selectedYear: number;
}

const props = withDefaults(defineProps<Props>(), {
  selectedYear: 2010,
});

const emits = defineEmits(["update"]);

const sliderWrap = ref<any>(null);

const ticks: Array<number> = [];
let width = ref<number>(0);

for (let i = 2010; i <= 2022; i++) {
  ticks.push(i);
}

const resizeSlider = () => {
  width.value = sliderWrap.value?.clientWidth!;
};

let sliderObserver = new ResizeObserver(resizeSlider);

onMounted(() => {
  sliderObserver.observe(sliderWrap.value);
});

onBeforeUnmount(() => {
  sliderObserver.unobserve(sliderWrap.value);
});

const tick = computed(() => {
  if (width.value < 1000) {
    return false;
  }

  return "always";
});

const thumb = computed(() => {
  if (width.value < 1000) {
    return "always";
  }

  return false;
});
</script>

<template>
  <div class="slider-wrapper" ref="sliderWrap">
    <div class="text-subtitle-2 text-slider elevation-2">
      Многолетняя динамика
    </div>
    <v-slider
      :value="props.selectedYear"
      :color="'indigo-darken-3'"
      :min="2010"
      :max="2022"
      :ticks="ticks"
      tick-size="4"
      :step="1"
      :thumb-label="thumb"
      :show-ticks="tick"
      hide-details
      @update:model-value="emits('update', $event)"
    ></v-slider>
  </div>
</template>

<style>
.slider-wrapper {
  position: absolute;
  display: flex;
  align-items: center;
  background: rgba(250, 250, 250, 0.5);
  gap: 1rem;
  width: calc(100% - var(--v-layout-right) - 130px);
  height: 50px;
  padding: 0 1rem 1rem 1rem;
  z-index: 100;
  bottom: 0;
}

.text-slider {
  background: #fff;
  border-radius: 6px;
  width: 170px;
  text-align: center;
  padding: 5px;
}
</style>
