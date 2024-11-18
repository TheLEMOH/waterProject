<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const click = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <SidebarPage :title="'Химия'" :redirect-name="'menu'">
    <template #body>
      <p class="pl-4 pt-1 opacity-80">
        Все данные на карте указаны в долях ПДК
      </p>
      <p class="pl-4 pb-1 opacity-80">(Кроме УКИЗВ)</p>
      <v-divider> </v-divider>
      <v-list>
        <v-list-item value="samples" @click="click('chemistrySamples')">
          <template #title>
            <span class="my-list-item"> Контрольные створы </span>
          </template>
        </v-list-item>
        <v-list-item value="about" @click="click('chemistryAbout')">
          <template #title>
            <span class="my-list-item"> Описание проекта </span>
          </template>
        </v-list-item>
      </v-list>

      <router-view></router-view>
    </template>
  </SidebarPage>
</template>
