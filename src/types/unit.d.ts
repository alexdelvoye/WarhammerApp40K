import { Weapon } from "./weapon";

export type Unit = {
  id: number;
  name: string;
  movement: number;
  toughness: number;
  save: number;
  wounds: number;
  leadership: number;
  objectControl: number;
  weapons: Weapon[];
  ability: string;
  points: number;
  image: string;
};
