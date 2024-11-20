<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const click = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <SidebarPage :title="'ГИС «Комплексная оценка качества вод р. Енисей»'" :show-close="false">
    <template #body>
      <v-list>
        <v-list-item value="about" @click="click('about')">
          <template #title>
            <span class="my-list-item"> О проекте </span>
          </template>
        </v-list-item>
        <v-list-item value="chemistry" @click="click('chemistry')">
          <template #title>
            <span class="my-list-item">
              Качество вод р. Енисей по гидрохимическим показателям
            </span>
          </template>
        </v-list-item>
        <v-list-item value="biology" @click="click('biology')">
          <template #title>
            <span class="my-list-item">
              Качество вод р. Енисей по гидробиологическим показателям
            </span>
          </template>
        </v-list-item>
      </v-list>

      <router-view></router-view>
    </template>
  </SidebarPage>
</template>

<style>
.my-list-item {
  white-space: wrap !important;
}
</style>
