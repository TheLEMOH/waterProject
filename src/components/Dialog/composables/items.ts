import { computed } from "vue";
import { Props } from "../types/props";

export default function useItems(props: Props) {
  const items = computed(() => {
    if (props.selectedPointOnMap) {
      const data = props.selectedPointOnMap.get("data");

      const newItems = [];

      for (let i in data) {
        newItems.push({ year: i, ...data[i] });
      }

      return newItems;
    } else {
      return [];
    }
  });

  return { items };
}
