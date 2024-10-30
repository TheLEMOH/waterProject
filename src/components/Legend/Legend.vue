<script setup lang="ts">
import group from "@/types/group";

export interface Degree {
  [key: string]: string;
}

const degree: Degree = {
  "1": "условно чистая",
  "2": "слабо загрязненная",
  "3": "загрязненная",
  "3а": "загрязненная",
  "3б": "очень загрязненная",
  "4": "грязная",
  "4а": "грязная",
  "4в": "грязная",
};
</script>

<template>
  <div class="legend-chemistry">
    <div
      class="legend-item elevation-2"
      v-for="[item, key] in group"
      :title="item"
      :key="key"
    >
      {{ item }} -
      {{ degree[item] }}
      <div class="legend-item-color" :style="{ background: key }"></div>
    </div>
  </div>
</template>

<style>
.legend-chemistry {
  position: absolute;
  bottom: 90px;
  left: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 3px;
}

.legend-item {
  border-radius: 6px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
}

.legend-item-color {
  width: 30px;
  height: 30px;
  border-radius: 6px;
}
</style>
