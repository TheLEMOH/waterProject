import { computed, ComputedRef, ref, watch } from "vue";

interface List {
  [key: string | symbol]: Indicators;
}

export default function useData(datasets: any, nameRoute: ComputedRef) {
  const selectedIndicator = ref<string | null>("qualityType");

  const indicatorsChemisry: Indicators = Object.keys(datasets[0][0].data[2010]);
  const indicatorsBiology: Indicators = Object.keys(datasets[1][0].data);

  const list: List = {
    chemistry: indicatorsChemisry,
    biology: indicatorsBiology,
  };

  const indicators = computed(() => list[nameRoute.value]);

  watch(nameRoute, (value) => {
    if (value == "biology") {
      selectedIndicator.value = "H";
    }

    if (value == "chemistry") {
      selectedIndicator.value = "qualityType";
    }
  });

  return { selectedIndicator, list, indicators };
}
