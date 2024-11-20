<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const click = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <SidebarPage
    :title="'Качество вод р. Енисей по гидробиологическим показателям'"
    :redirect-name="'menu'"
  >
    <template #body>
      <v-list>
        <v-list-item value="about" @click="click('biologyAbout')">
          <template #title>
            <span class="my-list-item"> Описание раздела </span>
          </template>
        </v-list-item>
        <v-list-item value="samples" @click="click('biologySamples')">
          <template #title>
            <span class="my-list-item"> Контрольные створы </span>
          </template>
        </v-list-item>
      </v-list>

      <router-view></router-view>
    </template>
  </SidebarPage>
</template>
