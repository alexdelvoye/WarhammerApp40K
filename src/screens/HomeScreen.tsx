import React from "react";
import { FlatList, Text } from "react-native";
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
  const navigation =
    useNavigation<StackNavigationProp<BattleForgeStackParamList>>();

  const { armyCompositions, deleteComposition } = useArmyCompositions();

  const renderArmyCompositionItem = ({ item }: { item: ArmyComposition }) => {
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
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <Text style={styles.header}>ARMIES</Text>

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
  );
}
