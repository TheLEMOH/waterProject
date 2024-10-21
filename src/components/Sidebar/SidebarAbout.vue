<script setup lang="ts">
import SidebarPage from "./SidebarPage.vue";
</script>

<template>
  <SidebarPage :title="'О проекте'">
    <template #body>
      <div class="pa-2">
        <p>Здесь будет текст про проект</p>
      </div>
    </template>
  </SidebarPage>
</template>
