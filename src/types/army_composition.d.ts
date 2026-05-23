import { Army } from "./army";
import { SelectedUnit } from "./selected_unit";

export type ArmyComposition = {
  id: string;
  name: string;
  army: Army;
  units: SelectedUnit[];
  totalPoints: number;
};
