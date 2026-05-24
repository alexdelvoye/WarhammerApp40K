import React from "react";
import {
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// import { database } from "../config/firebase";
// import { armies as seedArmyData } from "../data/mockArmies";
// import { seedArmies } from "../services/firestoreService";

import CreateArmyCompositionForm from "../components/forms/CreateArmyCompositionForm";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { Army } from "../types/army";

import { armyImages } from "../utils/armyImages";

import { useArmies } from "../hooks/useArmies";
import { useCreateArmyComposition } from "../hooks/useCreateArmyComposition";
import { useTheme } from "../hooks/useTheme";

import { CreateArmyCompositionScreenStyles as styles } from "../styles/createArmyCompositionScreenStyles";
import { themeColors } from "../styles/themeColors";

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
          { borderColor: colors.border },
          isSelected && { borderColor: colors.text },
        ]}
        onPress={() => selectArmy(item)}
      >
        <ImageBackground
          source={armyImages[item.imageKey]}
          style={styles.armyImageBackground}
          imageStyle={styles.armyImage}
        >
          <View style={styles.armyOverlay}>
            <Text style={styles.armyText}>{item.name}</Text>

            <Text style={styles.armyRule}>{item.armyRule}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
                onPress={async () => {
                  try {
                    console.log("Seeding armies...");

                    await seedArmies(database, seedArmyData);

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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
