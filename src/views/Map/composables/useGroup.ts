import { groupChemistry, groupBiology } from "@/types/group";
import { ComputedRef, ref, watch } from "vue";

export default function useGroup(nameRoute: ComputedRef<string>) {

  const groups: { [key: string]: Map<string, string> } = {
    chemistry: groupChemistry,
    biology: groupBiology
  }

  const selectedGroup = ref<Map<string, string> | null>(
    nameRoute.value == "chemistry" ? groupChemistry : groupBiology
  );

  watch(nameRoute, (value: string) => {
    selectedGroup.value = groups[value]
  });

  return { selectedGroup };
}
