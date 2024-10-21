<script setup lang="ts">
import { ref } from "vue";

const selectedYear = ref<number>(2010);

const emits = defineEmits(["update"]);
</script>

<template>
  <div class="slider-wrapper">
    <v-slider
      v-model="selectedYear"
      :min="2010"
      :max="2022"
      :step="1"
      thumb-label
      @update:model-value="emits('update', $event)"
    ></v-slider>
  </div>
</template>

<style>
.slider-wrapper {
  position: absolute;
  width: calc(100% - var(--v-layout-right) - 130px);
  padding: 0 1rem 0 1rem;
  z-index: 100;
  bottom: 0;
}
</style>
