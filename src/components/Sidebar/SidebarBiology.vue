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

  listItems.push({ type: "subheader", title: section });

  items.forEach((item, index) => {
    listItems.push({
      title: `${index + 1}) ${item.samplingLocation}`,
      value: item.id,
    });
  });

  listItems.push({ type: "divider" });
});

const test = (e: any): void => {
  const finded = datasetBiology.find((item) => item.id == e.id);
  setSelectedPoint(finded);
};
</script>

<template>
  <SidebarPage :title="'Биология'">
    <template #body>
      <v-list :items="listItems" item-props @click:select="test"> </v-list>
    </template>
  </SidebarPage>
</template>
