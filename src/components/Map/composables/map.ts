import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { ComputedRef, inject, onMounted, ref, watch } from "vue";

import { MapBrowserEvent } from "ol";

export default function useMap(settings: { target: string }) {
  const { selectedPoint } = inject<any>("selectedPoint");
  const { selectedIndicator } = inject<any>("indicator");
  const { selectedYear } = inject<any>("year");
  const nameRoute = inject<ComputedRef<string | symbol>>("nameRoute")!;

  const layers: VectorLayer<VectorSource<never>, never>[] =
    inject<any>("layers");

  layers.forEach((element) => {
    if (
      element.get("name") == nameRoute.value &&
      element.get("year") == selectedYear.value &&
      element.get("indicator") == selectedIndicator.value
    ) {
      element.setVisible(true);
    }
  });

  const map = ref();
  const dialog = ref(false);
  const selectedPointOnMap = ref(null);

  const view = new View({
    center: fromLonLat([92, 60]),
    zoom: 4,
  });

  const osm = new TileLayer({
    source: new OSM(),
  });

  onMounted(() => {
    map.value = new Map({
      target: settings.target,
      layers: [osm, ...layers],
      view: view,
    });

    map.value.on("click", (event: MapBrowserEvent<UIEvent>) => {
      const features = map.value.getFeaturesAtPixel(event.pixel, {
        hitTolerance: 2,
      });

      const feature = features[0];

      if (feature) {
        selectedPointOnMap.value = feature;
        dialog.value = true;
      }
    });

    watch(selectedPoint, (value) => {
      view.animate({
        center: fromLonLat(value.position),
        zoom: 15,
        duration: 1000,
      });
    });

    watch(nameRoute, (value: ComputedRef<string | symbol>) => {
      layers.forEach((element) => {
        if (
          element.get("name") == value &&
          element.get("year") == selectedYear.value &&
          element.get("indicator") == selectedIndicator.value
        ) {
          element.setVisible(true);
        } else {
          element.setVisible(false);
        }
      });
    });

    watch(selectedYear, (value: string) => {
      layers.forEach((element) => {
        if (
          element.get("year") == value &&
          element.get("indicator") == selectedIndicator.value
        ) {
          element.setVisible(true);
        } else {
          element.setVisible(false);
        }
      });
    });

    watch(selectedIndicator, (value: string) => {
      layers.forEach((element) => {
        if (
          element.get("year") == selectedYear.value &&
          element.get("indicator") == value
        ) {
          element.setVisible(true);
        } else {
          element.setVisible(false);
        }
      });
    });
  });

  const closeDialog = () => {
    dialog.value = false;
  };

  return { map, dialog, selectedPointOnMap, selectedYear, closeDialog };
}
