<script setup lang="ts">
import DialogMap from "../Dialog/DialogMap.vue";

import "ol/ol.css";

import useMap from "./composables/map";

const { dialog, selectedPointOnMap, closeDialog } = useMap({
  target: "map",
});
</script>

<template>
  <div id="map"></div>

  <div class="map-popup elevation-4" id="mapPopup">
    <div class="map-popup-header" id="mapPopupHeader">
      <h3>Показатели</h3>
      <v-btn
        id="closer"
        icon="mdi-close"
        :density="'compact'"
        :variant="'plain'"
      ></v-btn>
    </div>
    <v-divider></v-divider>
    <div class="map-popup-content" id="mapPopupContent"></div>
  </div>

  <DialogMap
    :dialog="dialog"
    :selectedPointOnMap="selectedPointOnMap"
    @close-dialog="closeDialog"
  ></DialogMap>
</template>

<style>
#map {
  height: 100%;
  width: 100%;
}

.map-popup {
  background: #fff;
  border-radius: 6px;
}

.map-popup-content {
  padding: 6px;
}

.map-popup-header {
  padding: 6px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.map-popup ul {
  list-style-type: none;
}

.map-popup li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 2px dotted #ddd;
}
</style>
