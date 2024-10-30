<script setup lang="ts">
import useItems from "./composables/biologyItems";
import { Feature } from "ol";
import { computed, inject } from "vue";

const props = withDefaults(
  defineProps<{ selectedPointOnMap: Feature | null }>(),
  {
    selectedPointOnMap: null,
  }
);

const { indicators } = inject<any>("indicator");

const { items } = useItems(props);

const headers = computed(() => {
  const res: Array<{}> = [];

  indicators.value.forEach((indicator: string) => {
    res.push({
      title: indicator,
      value: indicator,
      sortable: true,
      width: "50px",
    });
  });

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
