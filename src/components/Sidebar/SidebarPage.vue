<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

interface Props {
  title?: string | null;
  showClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: null,
  showClose: true,
});

const back = () => {
  router.back();
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h1 class="pa-2">{{ props.title }}</h1>
      <v-btn
        rounded
        density="comfortable"
        :elevation="0"
        @click="back()"
        icon="mdi-close"
        v-if="props.showClose"
      >
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
  padding: 8px;
}

.sidebar-divider {
  color: #000 !important;
  opacity: 0.5;
}
</style>
