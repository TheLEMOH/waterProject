import { ComputedRef, ref, watch } from "vue";

export default function useYear(nameRoute: ComputedRef<{}>) {
  const selectedYear = ref<number>(2010);

  watch(nameRoute, () => {
    selectedYear.value = 2010;
  });

  return { selectedYear };
}
