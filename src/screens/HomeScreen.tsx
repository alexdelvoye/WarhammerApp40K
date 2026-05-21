import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ArmyCompositionCard from "../components/cards/ArmyCompositionCard";
import AddArmyCompositionButton from "../components/buttons/AddArmyCompositionButton";

import { armyCompositions } from "../data/mockData";

import { homeScreenStyles } from "../styles/homeScreenStyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>
        BATTLE FORGE
      </Text>

      <FlatList
        data={armyCompositions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArmyCompositionCard
            armyComposition={item}
          />
        )}
        contentContainerStyle={homeScreenStyles.list}
      />

      <AddArmyCompositionButton onPress={() => console.log("Add army composition pressed")} />
    </SafeAreaView>
  );
};