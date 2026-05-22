import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import uuid from "react-native-uuid";

import { armyCompositionAdded } from "../features/armyCompositions/armyCompositionSlice";
import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";
import { useAppDispatch } from "../store/hooks";
import { Army } from "../types/army";
import { ArmyComposition } from "../types/army_composition";

export function useCreateArmyComposition(
  navigation: StackNavigationProp<BattleForgeStackParamList>,
) {
  const [selectedArmy, setSelectedArmy] = useState<Army | null>(null);
  const [armySelectionError, setArmySelectionError] = useState("");

  const dispatch = useAppDispatch();

  const selectArmy = (army: Army) => {
    setSelectedArmy(army);
    setArmySelectionError("");
  };

  const createArmyComposition = (compositionName: string) => {
    if (!selectedArmy) {
      setArmySelectionError("Please select an army");

      return;
    }

    const newArmyComposition: ArmyComposition = {
      id: uuid.v4().toString(),
      name: compositionName,
      army: selectedArmy,
      units: [],
      totalPoints: 0,
      image: selectedArmy.image,
    };

    dispatch(armyCompositionAdded(newArmyComposition));

    navigation.navigate("ArmyComposition", {
      armyComposition: newArmyComposition,
    });
  };

  return {
    selectedArmy,
    armySelectionError,
    selectArmy,
    createArmyComposition,
  };
}
