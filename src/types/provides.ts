import { ComputedRef, Ref } from "vue";
import { IndicatorHtml } from "./indicatorHTML";

export interface ProvideSelectedPoint {
    selectedPoint: Ref<chemistryPoint | null>,
    setSelectedPoint: Function
}

export interface ProvideIndicator {
    selectedIndicator: Ref<string>
    indicators: ComputedRef<Indicators>,
    indicatorsHtml: Ref<IndicatorHtml | null>
}

export interface ProvideYear { selectedYear: Ref<number> }

