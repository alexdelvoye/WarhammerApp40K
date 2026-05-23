import { Unit } from "./unit";

export type Army = {
  id: string;
  name: string;
  armyRule: string;
  units: Unit[];
};
