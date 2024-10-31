import Degree from "@/types/degree";
import { ComputedRef, ref, watch } from "vue";

export default function useDegree(nameRoute: ComputedRef) {
  const degreeChemistry: Degree = {
    "1": "условно чистая",
    "2": "слабо загрязненная",
    "3": "загрязненная",
    "3а": "загрязненная",
    "3б": "очень загрязненная",
    "4": "грязная",
    "4а": "грязная",
    "4в": "грязная",
  };

  const degreeBiology: Degree = {
    "1": "условно чистая",
    "2": "слабо загрязненная",
    "3": "загрязненная",
    "4": "грязная",
  };

  const selectedDegree = ref<Degree | null>(
    nameRoute.value == "chemistry" ? degreeChemistry : degreeBiology
  );

  watch(nameRoute, (value) => {
    if (value == "biology") {
      selectedDegree.value = degreeBiology;
    }

    if (value == "chemistry") {
      selectedDegree.value = degreeChemistry;
    }
  });

  return { selectedDegree };
}
