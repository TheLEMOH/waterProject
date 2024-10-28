<script setup lang="ts">
import chemistry from "@/dictonary/chemistry";
import useItems from "./composables/chemistryItems";
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

  res.push({
    title: "Год",
    value: "year",
    sortable: true,
    width: "50px",
    fixed: false,
  });

  for (let i in chemistry) {
    res.push({ title: chemistry[i], value: i, sortable: true, width: "50px" });
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
