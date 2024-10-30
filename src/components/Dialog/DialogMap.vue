<script setup lang="ts">
import Chart from "../Chart/Chart.vue";
import lineLayout from "@/scripts/chart/lineLayout";
import { ref, ComputedRef, inject } from "vue";
import TableChemistry from "./TableChemistry.vue";
import TableBiology from "./TableBiology.vue";
import useItems from "./composables/chemistryItems";
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

const tables: { [key: string | symbol]: any } = {
  chemistry: TableChemistry,
  biology: TableBiology,
};

const nameRoute = inject<ComputedRef<string | symbol>>("nameRoute")!;
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

        <component
          :is="tables[nameRoute]"
          :selectedPointOnMap="selectedPointOnMap"
        ></component>

        <template v-if="nameRoute == 'chemistry'">
          <v-list-subheader>График</v-list-subheader>

          <div class="chart-settings">
            <v-select
              label="Выберите показатель"
              v-model="selectedIndicator"
              :items="indicators"
              :item-value="'value'"
              :item-title="'label'"
              style="max-width: 350px"
            >
            </v-select>
          </div>

          <Chart :series="series" :options="lineLayout"></Chart>
        </template>
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
