<script setup lang="ts">
import { ref } from "vue";

const drawer = ref<boolean>(true);
</script>

<template>
  <v-fab :icon="drawer ? 'mdi-chevron-right' : 'mdi-chevron-left'" location="top end" absolute
    @click="drawer = !drawer">
  </v-fab>

  <v-navigation-drawer v-model="drawer" location="right" :elevation="5" :width="430" :mobile="false">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-navigation-drawer>
</template>

<style>
.btn-drawer {
  position: absolute !important;
  left: auto;
  z-index: 1;
}

.v-fab__container {
  margin: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
