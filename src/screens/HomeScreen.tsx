import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import ArmyCompositionCard from "../components/cards/ArmyCompositionCard";
import AddArmyCompositionButton from "../components/buttons/AddArmyCompositionButton";

import { armyCompositions } from "../data/mockData";

import { homeScreenStyles } from "../styles/homeScreenStyles";

export default function HomeScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>BATTLE FORGE</Text>

      <FlatList
        data={armyCompositions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArmyCompositionCard armyComposition={item} />
        )}
        contentContainerStyle={homeScreenStyles.list}
      />

      <AddArmyCompositionButton
        onPress={() => navigation.navigate("SelectArmy")}
      />
    </SafeAreaView>
  );
}
