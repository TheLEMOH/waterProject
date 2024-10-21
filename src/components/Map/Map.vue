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
</style>
