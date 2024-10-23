<script setup lang="ts">
import Chart from "../Chart/Chart.vue";
import lineLayout from "@/scripts/chart/lineLayout";
import chemistry from "@/dictonary/chemistry";
import { ref, computed } from "vue";
import useItems from "./composables/items";
import useIndicators from "./composables/indicators";

import { Props } from "./types/props";
import useSeries from "./composables/series";

const props = withDefaults(defineProps<Props>(), {
  dialog: false,
  selectedPointOnMap: null,
});

const emits = defineEmits(["closeDialog"]);

const selectedIndicator = ref("ХПК");

const { items } = useItems(props);
const { indicators } = useIndicators(items);
const { series } = useSeries({ items, selectedIndicator });

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
  <v-dialog :model-value="props.dialog" fullscreen>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          {{ selectedPointOnMap ? selectedPointOnMap.get("name") : null }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-close" @click="emits('closeDialog', false)"></v-btn>
      </v-toolbar>

      <v-list subheader>
        <v-list-subheader>Табличные данные</v-list-subheader>

        <v-data-table
          :density="'compact'"
          :headers="headers"
          :items="items"
          hide-default-footer
          :items-per-page="100"
          style="padding: 0 6px 0 6px"
        >
        </v-data-table>

        <v-list-subheader>График</v-list-subheader>

        <div class="chart-settings">
          <v-select
            label="Выберите показатель"
            v-model="selectedIndicator"
            :items="indicators"
            style="max-width: 350px"
          >
          </v-select>
        </div>

        <Chart :series="series" :options="lineLayout"></Chart>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<style>
.chart-settings {
  display: flex;
  align-items: center;
  gap: 1rem;
}

th {
  padding: 0 2px !important;
}

td {
  padding: 0 2px !important;
}
</style>
