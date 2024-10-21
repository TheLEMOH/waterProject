import { computed, Ref } from "vue";
import chartModule from "@/scripts/chart/chart";
import { Group } from "@/types/group";

export default function useSeries(
  items: Ref<chemistryArray>,
  selectedIndicator: Ref<string>,
  selectedRadio: Ref<string>,
  indicators: Ref<Indicators>,
  group: Group
) {
  const series = computed(() => {
    if (!selectedIndicator.value) return [];

    if (selectedRadio.value == "radio-1") {
      return [
        chartModule.lineChart(
          items.value,
          "year",
          selectedIndicator.value,
          "qualityType",
          group
        ),
      ];
    }

    return indicators.value.map((key) => {
      return chartModule.lineChart(
        items.value,
        "year",
        key,
        "qualityType",
        group
      );
    });
  });

  return { series };
}
