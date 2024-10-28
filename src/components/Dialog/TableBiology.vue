<script setup lang="ts">
import biology from "@/dictonary/biology";
import useItems from "./composables/biologyItems";
import { Feature } from "ol";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ selectedPointOnMap: Feature | null }>(),
  {
    selectedPointOnMap: null,
  }
);

const { items } = useItems(props);

const headers = computed(() => {
  const res = [];

  for (let i in biology) {
    res.push({ title: biology[i], value: i, sortable: true, width: "50px" });
  }

  return res;
});
</script>

<template>
  <v-data-table
    :density="'compact'"
    :headers="headers"
    :items="items"
    hide-default-footer
    :items-per-page="100"
    style="padding: 0 6px 0 6px"
  >
  </v-data-table>
</template>
