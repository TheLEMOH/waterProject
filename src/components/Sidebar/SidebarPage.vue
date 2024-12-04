<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

interface Props {
  title?: string | null;
  showClose?: boolean;
  redirectName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: null,
  showClose: true,
  redirectName: "menu",
});

const back = () => {
  router.push({ name: props.redirectName });
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h1 class="pa-2">{{ props.title }}</h1>
      <v-btn rounded density="comfortable" :elevation="0" @click="back()" icon="mdi-close" v-if="props.showClose">
      </v-btn>
    </div>

    <v-divider></v-divider>

    <slot name="body"></slot>
  </div>
</template>

<style>
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-wrap: balance;
  padding: 8px;
  font-size: 14px;
}

.sidebar-divider {
  color: #000 !important;
  opacity: 0.5;
}
</style>
