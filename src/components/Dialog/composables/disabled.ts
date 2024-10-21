import { computed, Ref } from "vue";

export default function useDisabled(selectedRadio: Ref) {
  const disableSelect = computed(() => {
    return selectedRadio.value == "radio-1" ? false : true;
  });
  return { disableSelect };
}
