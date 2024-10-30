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

let width = ref<number>(0);

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

const ticks = computed(() => {
  const res = [];

  for (let i = 2010; i <= 2022; i++) {
    res.push(i);
  }

  return res;
});

const device = computed(() => {
  if (width.value < 800) {
    return "mobile";
  }

  return "computer";
});
</script>

<template>
  <div class="slider-wrapper" ref="sliderWrap">
    <div class="text-subtitle-2">Многолетняя динамика</div>
    <v-slider
      :value="props.selectedYear"
      style="width: 100%"
      thumb-color="indigo-darken-1"
      track-color="indigo-darken-1"
      track-fill-color="indigo-darken-4"
      :min="2010"
      :max="2022"
      :ticks="ticks"
      tick-size="5"
      :show-ticks="'always'"
      :step="1"
      hide-details
      @update:model-value="emits('update', $event)"
    >
      <template #tick-label="{ tick }">
        <span v-if="+tick.label! % 2 == 0 && device=='mobile'">{{
          tick.label
        }}</span>
        <span v-if="device == 'computer'">{{ tick.label }}</span>
      </template>
    </v-slider>
  </div>
</template>

<style>
.slider-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - var(--v-layout-right) - 146px);
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 1rem 1rem 1rem;
  z-index: 100;
  margin-left: 6px;
  padding-top: 6px;
  bottom: 6px;
  border-radius: 6px;
}

.text-slider {
  background: #fff;
  border-radius: 6px;
  width: 170px;
  text-align: center;
  padding: 5px;
}
</style>
