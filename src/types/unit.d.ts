// Base unit profile stored inside an army document.
export type Unit = {
  // Unit id is unique within the sample army data.
  id: string;
  // Display name shown on unit cards.
  name: string;
  // Warhammer-style movement stat.
  movement: number;
  // Warhammer-style toughness stat.
  toughness: number;
  // Armor save value shown as a number in the UI.
  save: number;
  // Wounds available to this unit.
  wounds: number;
  // Leadership value for the unit.
  leadership: number;
  // Objective control value for scoring objectives.
  objectControl: number;
  // Short ability/rule summary shown on cards.
  ability: string;
  // Points added to the army composition total when selected.
  points: number;
};
