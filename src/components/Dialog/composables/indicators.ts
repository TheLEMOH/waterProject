import { computed, Ref } from "vue";

export default function useIndicators(items: Ref) {
  const indicators = computed(() => {
    if (items.value.length == 0) {
      return [];
    }

    const keys = Object.keys(items.value[0]);

    keys.splice(0, 2);

    return keys;
  });

  return { indicators };
}
