import { Unit } from "./unit";
import { ArmyImageKey } from "../utils/armyImages";

export type Army = {
  id: string;
  name: string;
  armyRule: string;
  imageKey: ArmyImageKey;
  units: Unit[];
};
