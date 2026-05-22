import { Army } from "./army";
import { Unit } from "./unit";

export type ArmyComposition = {
  id: string;
  name: string;
  army: Army;
  units: Unit[];
  totalPoints: number;
  image: string;
};
