import { computed, Ref } from "vue";
import chartModule from "@/scripts/chart/chart";

export default function useSeries({
  items,
  selectedIndicator,
}: {
  items: Ref<chemistryArray>;
  selectedIndicator: Ref<string>;
}) {
  const series = computed(() => {
    if (!selectedIndicator.value) return [];
    return [
      chartModule.lineChart(items.value, "year", selectedIndicator.value),
    ];
  });

  return { series };
}
