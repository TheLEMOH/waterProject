<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
</script>

<template>
  <SidebarPage :title="'О проекте Биология'">
    <template #body>
      <p class="pa-4">Тут текст</p>
    </template>
  </SidebarPage>
</template>
