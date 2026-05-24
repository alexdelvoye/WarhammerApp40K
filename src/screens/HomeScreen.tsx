import React from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import ArmyCompositionCard from "../components/cards/ArmyCompositionCard";
import AddArmyCompositionButton from "../components/buttons/AddArmyCompositionButton";

import { ArmyComposition } from "../types/army_composition";

import { useArmyCompositions } from "../hooks/useArmyCompositions";

import { HomeScreenStyles as styles } from "../styles/homeScreenStyles";

export default function HomeScreen() {
  // Navigation lets this screen open the create screen or a selected composition.
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  // The hook hides Redux and Firestore details from the screen component.
  const { armyCompositions, deleteComposition } = useArmyCompositions();

  const renderArmyCompositionItem = ({ item }: { item: ArmyComposition }) => {
    // Every row is one saved army list. Press opens it; trash deletes it.
    return (
      <ArmyCompositionCard
        armyComposition={item}
        onPress={() =>
          navigation.navigate("ArmyComposition", {
            armyComposition: item,
          })
        }
        onDelete={() => deleteComposition(item.id)}
      />
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        {/* This title is outside a card, so the stylesheet keeps it readable on the background image. */}
        <Text style={styles.header}>ARMIES</Text>

        {/* FlatList efficiently renders a scrollable list, even when many armies exist. */}
        <FlatList
          data={armyCompositions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderArmyCompositionItem}
          contentContainerStyle={styles.list}
        />

        <AddArmyCompositionButton
          onPress={() => navigation.navigate("CreateArmyComposition")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
