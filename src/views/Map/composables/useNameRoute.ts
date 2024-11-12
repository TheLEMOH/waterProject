import { computed } from "vue";
import { useRoute } from "vue-router";

export default function useNameRoute() {
  const route = useRoute();

  const nameRoute = computed<string>(() => route.meta.project?.toString() || "menu");

  return { nameRoute };
}
