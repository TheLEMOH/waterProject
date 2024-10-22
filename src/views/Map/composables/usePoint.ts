import { ref } from "vue";

export default function usePoint() {
  const selectedPoint = ref<chemistryPoint | null>(null);

  const setSelectedPoint = (point: any) => {
    selectedPoint.value = point;
  };

  return { selectedPoint, setSelectedPoint };
}
