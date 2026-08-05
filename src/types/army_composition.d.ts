import { Army } from "./army";
import { SelectedUnit } from "./selected_unit";

// User-owned army list stored under users/{userId}/armyCompositions in Firestore.
export type ArmyComposition = {
  // Generated uuid used as both app id and Firestore document id.
  id: string;
  // User-facing army list name.
  name: string;
  // Selected faction, including its rule, image key, and available units.
  army: Army;
  // Unit copies currently added to this composition.
  units: SelectedUnit[];
  // Cached total so list cards can render points without recalculating.
  totalPoints: number;
};
