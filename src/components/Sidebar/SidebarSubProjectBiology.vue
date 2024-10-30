<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const click = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <SidebarPage :title="'Биология'">
    <template #body>
      <p class="pl-4 pt-1 opacity-80">
        Все данные на карте указаны в долях ПДК
      </p>
      <p class="pl-4 pb-1 opacity-80">(Кроме IP)</p>
      <v-divider> </v-divider>
      <v-list>
        <v-list-item value="samples" @click="click('biologySamples')">
          <template #title>
            <span class="my-list-item"> Контрольные створы </span>
          </template>
        </v-list-item>
        <v-list-item value="about" @click="click('biologyAbout')">
          <template #title>
            <span class="my-list-item"> Описание проекта </span>
          </template>
        </v-list-item>
      </v-list>
    </template>
  </SidebarPage>
</template>
