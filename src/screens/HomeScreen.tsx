import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import ArmyCompositionCard from "../components/cards/ArmyCompositionCard";
import AddArmyCompositionButton from "../components/buttons/AddArmyCompositionButton";

import { ArmyComposition } from "../types/army_composition";

import { armyCompositions } from "../data/mockData";

import { homeScreenStyles } from "../styles/homeScreenStyles";

export default function HomeScreen() {
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const renderArmyCompositionItem = ({ item }: { item: ArmyComposition }) => (
    <ArmyCompositionCard armyComposition={item} />
  );

  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.header}>ARMIES</Text>

      <FlatList
        data={armyCompositions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderArmyCompositionItem}
        contentContainerStyle={homeScreenStyles.list}
      />

      <AddArmyCompositionButton
        onPress={() => navigation.navigate("CreateArmyComposition")}
      />
    </SafeAreaView>
  );
}
