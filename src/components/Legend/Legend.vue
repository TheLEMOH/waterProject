<script setup lang="ts">
import Degree from "@/types/degree";

interface Props {
  degree: Degree | null;
  group: Map<string, string> | null;
}

withDefaults(defineProps<Props>(), {
  degree: null,
  group: null,
});
</script>

<template>
  <div class="legend-chemistry">
    <template v-if="degree && group">
      <div class="legend-item elevation-2" v-for="[item, key] in group" :title="item" :key="item">
        <span>
          {{ item }} -
          {{ degree[item] }}
        </span>
        <div class="legend-item-color" :style="{ background: key }"></div>
      </div>
    </template>
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
