<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import datasetBiology from "../../datasets/db_b.json";

import { inject } from "vue";

const { setSelectedPoint } = inject<any>("selectedPoint");

const sections = new Set(datasetBiology.map((item) => item.section));

const listItems: any = [];

sections.forEach((section) => {
  const items = datasetBiology.filter(
    (itemData) => itemData.section == section
  );

  listItems.push({
    type: "header",
    title: section,
    class: ["sidebar-bold"],
  });

  items.forEach((item, index) => {
    listItems.push({
      title: `${item.station}) ${item.samplingLocation}`,
      subtitle: `Км от устья - ${item.km}`,
      value: item.id,
    });
  });

  listItems.push({
    type: "divider",
    class: ["sidebar-divider"],
  });
});

const test = (e: any): void => {
  const finded = datasetBiology.find((item) => item.id == e.id);
  setSelectedPoint(finded);
};
</script>

<template>
  <SidebarPage :title="'Биология'">
    <template #body>
      <p class="pl-4 pt-1 opacity-80">Краткое описание</p>
      <v-divider> </v-divider>
      <v-list :items="listItems" item-props @click:select="test"> </v-list>
    </template>
  </SidebarPage>
</template>

<style>
.sidebar-bold .v-list-item-title {
  font-weight: bold;
  font-size: 18px;
}
</style>
