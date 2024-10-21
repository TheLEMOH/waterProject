<script setup lang="ts">
import Chart from "../Chart/Chart.vue";
import lineLayout from "@/scripts/chart/lineLayout";
import group from "@/types/group";
import { ref } from "vue";
import useItems from "./composables/items";
import useIndicators from "./composables/indicators";

import { Props } from "./types/props";
import useSeries from "./composables/series";
import useDisabled from "./composables/disabled";

const props = withDefaults(defineProps<Props>(), {
  dialog: false,
  selectedPointOnMap: null,
});

const emits = defineEmits(["closeDialog"]);

const selectedIndicator = ref("ХПК");
const selectedRadio = ref("radio-1");

const { items } = useItems(props);
const { indicators } = useIndicators(items);
const { disableSelect } = useDisabled(selectedRadio);

const { series } = useSeries(
  items,
  selectedIndicator,
  selectedRadio,
  indicators,
  group
);
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
          :items="items"
          hide-default-footer
          :items-per-page="100"
        ></v-data-table>
        <v-list-subheader>График</v-list-subheader>
        <div class="chart-settings">
          <v-select
            label="Выберите показатель"
            v-model="selectedIndicator"
            :items="indicators"
            style="max-width: 350px"
            :disabled="disableSelect"
          >
          </v-select>
          <v-radio-group v-model="selectedRadio" inline>
            <v-radio label="Одиночный" value="radio-1"></v-radio>
            <v-radio label="Множественный" value="radio-2"></v-radio>
          </v-radio-group>
        </div>
        <Chart
          :series="series"
          :options="lineLayout"
          :key="selectedRadio"
        ></Chart>
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
</style>
