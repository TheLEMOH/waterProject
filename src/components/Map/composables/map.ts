import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import dataset from "../../../datasets/db_c.json";
import BaseClassLayer from "@/scripts/map/map";

import { inject, onMounted, ref, watch } from "vue";
import VectorSource from "ol/source/Vector";
import { MapBrowserEvent } from "ol";

export default function useMap(settings: { target: string }) {
  const { selectedPoint } = inject<any>("selectedPoint");
  const { indicators, selectedIndicator } = inject<any>("indicator");
  const { selectedYear } = inject<any>("year");

  const map = ref();
  const dialog = ref(false);
  const selectedPointOnMap = ref(null);

  const layers: VectorLayer<VectorSource<never>, never>[] = [];

  for (let i = 2010; i <= 2022; i++) {
    for (let j = 0; j < indicators.length; j++) {
      layers.push(
        new BaseClassLayer<chemistryArray>({
          name: `chemistry ${i} ${indicators[j]}`,
        }).CreateLayer(dataset, i, indicators[j])
      );
    }
  }

  layers[0].setVisible(true);

  const view = new View({
    center: [0, 0],
    zoom: 0,
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
