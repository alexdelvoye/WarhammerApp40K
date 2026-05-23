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

//import { armies } from "../data/mockArmies";

import CreateArmyCompositionForm from "../components/forms/CreateArmyCompositionForm";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { CreateArmyCompositionScreenStyles as styles } from "../styles/createArmyCompositionScreenStyles";

import { useCreateArmyComposition } from "../hooks/useCreateArmyComposition";
import { useArmies } from "../hooks/useArmies";
//import { seedArmies } from "../services/firestoreService";

export default function CreateArmyCompositionScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const { armies } = useArmies();

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
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
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

          {/* <Pressable
            style={styles.createButton}
            onPress={() => async {
              try {
                console.log("Seeding armies...");

                await seedArmies(database, armies);

                console.log("Armies seeded successfully");
              } catch (error) {
                console.log("Seed error:", error);
              }
            }}
          >
            <Text style={styles.createButtonText}>Seed Armies</Text>
          </Pressable> */}
        </CreateArmyCompositionForm>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
