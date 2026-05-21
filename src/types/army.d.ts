import { Unit } from './unit';

export type Army = {
  id: number;
  name: string;
  armyRule: string;
  units: Unit[];
  image: string;
};
