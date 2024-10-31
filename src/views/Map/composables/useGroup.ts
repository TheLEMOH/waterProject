import { groupChemistry, groupBiology, Group } from "@/types/group";
import { computed, ComputedRef, ref, watch } from "vue";

export default function useGroup(nameRoute: ComputedRef) {
  const selectedGroup = ref<Map<string, string> | null>(
    nameRoute.value == "chemistry" ? groupChemistry : groupBiology
  );

  watch(nameRoute, (value) => {
    if (value == "chemistry") {
      selectedGroup.value = groupChemistry;
    }

    if (value == "biology") {
      selectedGroup.value = groupBiology;
    }
  });

  return { selectedGroup };
}
