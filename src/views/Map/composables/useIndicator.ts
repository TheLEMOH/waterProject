import { computed, ComputedRef, ref } from "vue";

interface List {
  [key: string | symbol]: Indicators;
}

export default function useData(datasets: any, nameRoute: ComputedRef) {
  const selectedIndicator = ref<string | null>(null);

  const indicatorsChemisry: Indicators = Object.keys(datasets[0].data[2010]);
  const indicatorsBiology: Indicators = Object.keys(datasets[0].data[2010]);

  const list: List = {
    chemistry: indicatorsChemisry,
    biology: indicatorsBiology,
  };

  const indicators = computed(() => list[nameRoute.value]);

  return { selectedIndicator, list, indicators };
}
