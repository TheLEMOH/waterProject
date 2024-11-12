import { computed, ComputedRef, ref, watch } from "vue";
import {
  indicatorChemistryHTML,
  indicatorBiologyHTML,
  IndicatorHtml,
} from "@/types/indicatorHTML";

interface List {
  [key: string | symbol]: Indicators;
}

export default function useData(datasets: any, nameRoute: ComputedRef) {
  const selectedIndicator = ref<string>(
    nameRoute.value == "chemistry" ? "УКИЗВ" : "IP"
  );

  const indicatorsHtml = ref<IndicatorHtml>(
    nameRoute.value == "chemistry"
      ? indicatorChemistryHTML
      : indicatorBiologyHTML
  );

  const indicatorsChemisry: Indicators = Object.keys(datasets[0][0].data[2010]);
  const indicatorsBiology: Indicators = Object.keys(datasets[1][0].data);

  indicatorsBiology.pop();

  const index = indicatorsBiology.length - 1;
  indicatorsBiology.splice(0, 0, indicatorsBiology.splice(index, 1)[0]);

  const list: List = {
    chemistry: indicatorsChemisry,
    biology: indicatorsBiology,
  };

  const indicators = computed(() => list[nameRoute.value]);

  watch(nameRoute, (value) => {
    if (value == "biology") {
      selectedIndicator.value = "IP";
      indicatorsHtml.value = indicatorBiologyHTML;
    }

    if (value == "chemistry") {
      selectedIndicator.value = "УКИЗВ";
      indicatorsHtml.value = indicatorChemistryHTML;
    }
  });

  return { selectedIndicator, list, indicators, indicatorsHtml };
}
