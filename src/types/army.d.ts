import { Unit } from "./unit";
import { ArmyImageKey } from "../utils/armyImages";

// Shared faction data loaded from Firestore and used when creating compositions.
export type Army = {
  // Firestore document id stored in the object for easier rendering and selection.
  id: string;
  // Display name shown on faction cards and army detail screens.
  name: string;
  // Short rules text shown in the army rules/information views.
  armyRule: string;
  // Key that links Firestore data to a bundled React Native image.
  imageKey: ArmyImageKey;
  // Units available for this faction in the add-unit modal.
  units: Unit[];
};
