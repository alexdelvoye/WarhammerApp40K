import React from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import AddUnitButton from "../components/buttons/AddUnitButton";

import { ArmyCompositionScreenStyles as styles } from "../styles/armyCompositionScreenStyles";

type ArmyCompositionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const route = useRoute<ArmyCompositionRouteProp>();
  const { armyComposition } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summaryCard}>
        <Text style={styles.title}>{armyComposition.name}</Text>

        <Text style={styles.subtitle}>
          {armyComposition.army.name}
        </Text>

        <Text style={styles.rule}>
          {armyComposition.army.armyRule}
        </Text>

        <View style={styles.pointsBox}>
          <Text style={styles.pointsText}>
            {armyComposition.totalPoints}/2000 Points
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Units</Text>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyText}>
          No units added yet.
        </Text>
      </View>

      <AddUnitButton onPress={() => console.log("Add unit pressed")} />
    </SafeAreaView>
  );
}