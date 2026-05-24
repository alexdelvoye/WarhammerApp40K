import React from "react";
import {
  FlatList,
  ImageBackground,
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//import { armies } from "../data/mockArmies";

import CreateArmyCompositionForm from "../components/forms/CreateArmyCompositionForm";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { Army } from "../types/army";

import { useArmies } from "../hooks/useArmies";
import { useCreateArmyComposition } from "../hooks/useCreateArmyComposition";
import { useTheme } from "../hooks/useTheme";

import { CreateArmyCompositionScreenStyles as styles } from "../styles/createArmyCompositionScreenStyles";
import { themeColors } from "../styles/themeColors";
//import { seedArmies } from "../services/firestoreService";

export default function CreateArmyCompositionScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const { armies } = useArmies();

  const { theme } = useTheme();
  const colors = themeColors[theme];

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
        style={[
          styles.armyButton,
          { backgroundColor: colors.card, borderColor: colors.border },
          isSelected && { borderColor: colors.text },
        ]}
        onPress={() => selectArmy(item)}
      >
        <Text style={[styles.armyText, { color: colors.text }]}>
          {item.name}
        </Text>

        <Text style={[styles.armyRule, { color: colors.subText }]}>
          {item.armyRule}
        </Text>
      </Pressable>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/images/screen_background.png")}
        style={styles.background}
      >
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
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
