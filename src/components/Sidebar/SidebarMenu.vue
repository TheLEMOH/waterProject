<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const click = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <SidebarPage :title="'Водные ресурсы'" :show-close="false">
    <template #body>
      <v-list>
        <v-list-item
          title="Биология"
          value="biology"
          @click="click('biology')"
        ></v-list-item>
        <v-list-item
          title="Химия"
          value="chemistry"
          @click="click('chemistry')"
        ></v-list-item>
        <v-list-item
          title="О проекте"
          value="about"
          @click="click('about')"
        ></v-list-item>
      </v-list>
    </template>
  </SidebarPage>
</template>
