import { Army } from './army';
import { Unit } from './unit';

export type ArmyComposition = {
  id: number;
  name: string;
  army: Army;
  units: Unit[];
  totalPoints: number;
  image: string;
};
