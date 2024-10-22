<script setup lang="ts">
import group from "@/types/group";
</script>

<template>
  <div class="legend">
    <div
      class="legend-item elevation-2"
      v-for="(item, index) in group"
      :title="item"
    >
      {{ index }}
      <div class="legend-item-color" :style="{ background: item }"></div>
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
  width: 80px;
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
