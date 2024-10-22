import { computed } from "vue";

import { useRoute } from "vue-router";

export default function useNameRoute() {
  const route = useRoute();

  const nameRoute = computed(() => route.name || "menu");

  return { nameRoute };
}
