import { Unit } from "./unit";

// A selected unit is a copied Unit with an id for this exact composition entry.
export type SelectedUnit = Unit & {
  // Allows the same unit type to be added and removed multiple times independently.
  armyCompositionUnitId: string;
};
