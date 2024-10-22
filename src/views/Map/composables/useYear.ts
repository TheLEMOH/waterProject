import { ref } from "vue";

export default function useYear() {
  const selectedYear = ref<number>(2010);

  return { selectedYear };
}
