<script setup lang="ts">
import useItems from "./composables/chemistryItems";
import { Feature } from "ol";
import { computed, inject } from "vue";

const props = withDefaults(
  defineProps<{ selectedPointOnMap: Feature | null }>(),
  { selectedPointOnMap: null, }
);

const { indicators } = inject<any>("indicator");

const { items } = useItems(props);

const { indicatorsHtml } = inject<any>("indicator");

const headers = computed(() => {
  const res: Array<{}> = [];

  res.push({
    title: "Год",
    value: "year",
    sortable: true,
    width: "50px",
    fixed: false,
  });

  indicators.value.forEach((indicator: string) => {
    res.push({
      title: indicatorsHtml.value[indicator],
      value: indicator,
      sortable: true,
      width: "50px",
    });
  });

  return res;
});
</script>

<template>
  <v-data-table :density="'compact'" :headers="headers" :items="items" hide-default-footer :items-per-page="100"
    style="padding: 0 6px 0 6px">
    <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
      <tr>
        <template v-for="column in columns" :key="column.key">
          <th>
            <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)" v-html="column.title">
            </span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)"></v-icon>
            </template>
          </th>
        </template>
      </tr>
    </template>
  </v-data-table>
</template>
