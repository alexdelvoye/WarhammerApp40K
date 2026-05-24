import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import uuid from "react-native-uuid";

import { database } from "../config/firebase";
import { saveArmyComposition } from "../services/firestoreService";
import { armyCompositionAdded } from "../features/armyCompositions/armyCompositionSlice";
import { useAppDispatch } from "../store/hooks";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { Army } from "../types/army";
import { ArmyComposition } from "../types/army_composition";

import { useAuth } from "./useAuth";

export function useCreateArmyComposition(
  navigation: StackNavigationProp<BattleForgeStackParamList>,
) {
  const [selectedArmy, setSelectedArmy] = useState<Army | null>(null);
  const [armySelectionError, setArmySelectionError] = useState("");

  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  const selectArmy = (army: Army) => {
    // Selecting an army also clears the validation message for this choice.
    setSelectedArmy(army);
    setArmySelectionError("");
  };

  const createArmyComposition = async (compositionName: string) => {
    // A composition cannot exist without a faction/army.
    if (!selectedArmy) {
      setArmySelectionError("Please select an army");
      return;
    }

    // Firestore data is stored under the current user's id.
    if (!currentUser) {
      setArmySelectionError("You must be logged in");
      return;
    }

    const newArmyComposition: ArmyComposition = {
      // uuid creates a unique id because new compositions do not have one yet.
      id: uuid.v4().toString(),
      name: compositionName,
      army: selectedArmy,
      units: [],
      totalPoints: 0,
    };

    // Add locally first so the app feels fast, then save to Firestore.
    dispatch(armyCompositionAdded(newArmyComposition));

    await saveArmyComposition(database, currentUser.uid, newArmyComposition);

    // After creation, open the detail screen for the new composition.
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
