import React from "react";
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

import { armies } from "../data/mockArmies";

import CreateArmyCompositionForm from "../components/forms/CreateArmyCompositionForm";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { CreateArmyCompositionScreenStyles as styles } from "../styles/createArmyCompositionScreenStyles";

import { useCreateArmyComposition } from "../hooks/useCreateArmyComposition";

export default function CreateArmyCompositionScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const {
    selectedArmy,
    armySelectionError,
    selectArmy,
    createArmyComposition,
  } = useCreateArmyComposition(navigation);

  const renderArmyItem = ({ item }: { item: Army }) => {
    const isSelected = selectedArmy?.id === item.id;

    return (
      <Pressable
        style={[styles.armyButton, isSelected && styles.selectedArmyButton]}
        onPress={() => selectArmy(item)}
      >
        <Text style={styles.armyText}>{item.name}</Text>

        <Text style={styles.armyRule}>{item.armyRule}</Text>
      </Pressable>
    );
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
            contentContainerStyle={styles.armyListContent}
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
