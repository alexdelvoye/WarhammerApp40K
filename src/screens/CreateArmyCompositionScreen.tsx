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
  // Typed navigation prevents mistakes in screen names and route parameters.
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  // Loads the available factions/armies from Firestore.
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

    // The selected army is highlighted with a different border.
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
          {/* The overlay places readable text on top of the faction image. */}
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
            {/* The form owns the name input and submit button; this screen adds army selection inside it. */}
            <CreateArmyCompositionForm
              createArmyComposition={createArmyComposition}
            >
              <Text style={styles.label}>Select Army</Text>

              {/* These armies come from Firestore, with images linked by imageKey. */}
              <FlatList
                style={styles.armyList}
                contentContainerStyle={styles.armyListContent}
                data={armies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderArmyItem}
              />

              <Text style={styles.errorText}>{armySelectionError}</Text>

              {/* Temporary helper for reseeding Firestore if the shared army data is lost. */}
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
