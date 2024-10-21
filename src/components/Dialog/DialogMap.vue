<script setup lang="ts">
import Chart from "../Chart/Chart.vue";
import chartModule from "@/chart/chart";
import lineLayout from "@/chart/lineLayout";
import group from "@/group/group";
import { computed, ref } from "vue";

interface Props {
  dialog?: boolean;
  selectedPointOnMap?: any;
}

const props = withDefaults(defineProps<Props>(), {
  dialog: false,
  selectedPointOnMap: null,
});

const emits = defineEmits(["closeDialog"]);

const selectedIndicator = ref("ХПК");
const selectedRadio = ref("radio-1");

const disableSelect = computed(() => {
  return selectedRadio.value == "radio-1" ? false : true;
});

const items = computed(() => {
  if (props.selectedPointOnMap) {
    const data = props.selectedPointOnMap.get("data");

    const newItems = [];

    for (let i in data) {
      newItems.push({ year: i, ...data[i] });
    }

    return newItems;
  } else {
    return [];
  }
});

const indicators = computed(() => {
  if (items.value.length == 0) {
    return [];
  }

  const keys = Object.keys(items.value[0]);

  keys.splice(0, 2);

  return keys;
});

const series = computed(() => {
  if (!selectedIndicator.value) return [];

  if (selectedRadio.value == "radio-1") {
    return [
      chartModule.lineChart(
        items.value,
        "year",
        selectedIndicator.value,
        "qualityType",
        group
      ),
    ];
  } else {
    return indicators.value.map((key) => {
      return chartModule.lineChart(
        items.value,
        "year",
        key,
        "qualityType",
        group
      );
    });
  }
});
</script>

<template>
  <v-dialog :model-value="props.dialog" fullscreen>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>{{ selectedPointOnMap.get("name") }}</v-toolbar-title>

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
