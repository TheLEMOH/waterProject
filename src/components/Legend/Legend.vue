<script setup lang="ts">
import group from "@/types/group";

export interface Degree {
  [key: string]: string;
}

const degree: Degree = {
  "1": "слабо загрязненная",
  "2": "загрязненная",
  "3": "загрязненная",
  "3а": "очень загрязненная",
  "3б": "очень загрязненная",
  "4": "грязная",
  "4а": "грязная",
  "4в": "грязная",
};

for (let i in group) {
  console.log(i);
}
</script>

<template>
  <div class="legend">
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
.legend {
  position: absolute;
  bottom: 55px;
  left: 1rem;
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
