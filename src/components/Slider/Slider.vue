<script setup lang="ts">
interface Props {
  selectedYear: number;
}

const props = withDefaults(defineProps<Props>(), {
  selectedYear: 2010,
});

const emits = defineEmits(["update"]);
</script>

<template>
  <div class="slider-wrapper">
    <div class="text-subtitle-2 text-slider elevation-2">
      Многолетняя динамика
    </div>
    <v-slider
      v-model:model-value="props.selectedYear"
      :min="2010"
      :max="2022"
      :step="1"
      thumb-label="always"
      show-ticks="always"
      hide-details
      @update:model-value="emits('update', $event)"
    ></v-slider>
  </div>
</template>

<style>
.slider-wrapper {
  position: absolute;
  display: flex;
  gap: 1rem;
  width: calc(100% - var(--v-layout-right) - 130px);
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
