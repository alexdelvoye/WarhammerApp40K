import React, { useState } from "react";

import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Army } from "../types/army";
import { ArmyComposition } from "../types/army_composition";

import { armies } from "../data/mockArmies";

import CreateArmyCompositionForm from "../components/forms/CreateArmyCompositionForm";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { CreateArmyCompositionScreenStyles as styles } from "../styles/createArmyCompositionScreenStyles";

export default function CreateArmyCompositionScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const [selectedArmy, setSelectedArmy] = useState<Army | null>(null);
  const [armySelectionError, setArmySelectionError] = useState("");

  const renderArmyItem = ({ item }: { item: Army }) => {
    const isSelected = selectedArmy?.id === item.id;

    return (
      <Pressable
        style={[styles.armyButton, isSelected && styles.selectedArmyButton]}
        onPress={() => {
          setSelectedArmy(item);
          setArmySelectionError("");
        }}
      >
        <Text style={styles.armyText}>{item.name}</Text>

        <Text style={styles.armyRule}>{item.armyRule}</Text>
      </Pressable>
    );
  };

  const createArmyComposition = (compositionName: string) => {
    if (!selectedArmy) {
      setArmySelectionError("Please select an army");

      return;
    }

    const newArmyComposition: ArmyComposition = {
      id: Date.now(),
      name: compositionName,
      army: selectedArmy,
      units: [],
      totalPoints: 0,
      image: selectedArmy.image,
    };

    navigation.navigate("ArmyComposition", {
      armyComposition: newArmyComposition,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <CreateArmyCompositionForm
          createArmyComposition={createArmyComposition}
        >
          <Text style={styles.label}>Select Army</Text>

          <FlatList
            style={styles.armyList}
            data={armies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderArmyItem}
          />

          <Text style={styles.errorText}>{armySelectionError}</Text>
        </CreateArmyCompositionForm>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
