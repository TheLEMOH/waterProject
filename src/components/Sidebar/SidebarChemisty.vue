<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import datasetChemistry from "../../datasets/db_c.json";

import { inject } from "vue";

const { setSelectedPoint } = inject<any>("selectedPoint");
</script>

<template>
  <SidebarPage :title="'Контрольные створы'" :redirect-name="'chemistry'">
    <template #body>
      <v-list lines="three">
        <v-list-item
          v-for="(item, index) in datasetChemistry"
          :title="`${index + 1}) ${item.samplingLocation}`"
          :value="item.id"
          @click="setSelectedPoint(item)"
        >
          <v-list-item-subtitle>
            {{ item.description }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </template>
  </SidebarPage>
</template>
