import { computed, Ref } from "vue";
import chartModule from "@/scripts/chart/chart";
import { Group } from "@/types/group";

export default function useSeries({
  items,
  selectedIndicator,
  group,
}: {
  items: Ref<chemistryArray>;
  selectedIndicator: Ref<string>;
  group: Group;
}) {
  const series = computed(() => {
    if (!selectedIndicator.value) return [];
    return [
      chartModule.lineChart(
        items.value,
        "year",
        selectedIndicator.value,
        "qualityType",
        group
      ),
    ];
  });

  return { series };
}
