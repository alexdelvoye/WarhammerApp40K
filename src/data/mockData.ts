import { ArmyComposition } from "../types/army_composition";

export const armyCompositions: ArmyComposition[] = [
  {
    id: "1",
    name: "TEST",
    army: {
      id: "1",
      name: "Imperial Knights",
      armyRule: "Gate Warden Lance",
      units: [],
      image: "",
    },
    units: [
      {
        id: "1",
        name: "Knight Paladin",
        movement: 10,
        toughness: 12,
        save: 3,
        wounds: 22,
        leadership: 6,
        objectControl: 10,
        weapons: [],
        ability: "Super-heavy Walker",
        points: 405,
        image: "",
      },
    ],
    totalPoints: 405,
    image: "",
  },
];
