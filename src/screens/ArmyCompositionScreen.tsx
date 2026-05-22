import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import AddUnitButton from "../components/buttons/AddUnitButton";

import { ArmyCompositionScreenStyles as styles } from "../styles/armyCompositionScreenStyles";

import { Unit } from "../types/unit";
import UnitCard from "../components/cards/UnitCard";

type ArmyCompositionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const navigation = useNavigation<StackNavigationProp<BattleForgeStackParamList>>();
  const route = useRoute<ArmyCompositionRouteProp>();
  const { armyComposition } = route.params;

  const [selectedUnits, setSelectedUnits] = useState<Unit[]>(armyComposition.units);

  const totalPoints = selectedUnits.reduce((totalPoints, unit) => totalPoints + unit.points, 0);

  const renderSelectedUnitItem = ({ item }: { item: Unit }) => (
    <UnitCard
      unit={item}
      buttonText="-"
      onPress={() => {
        setSelectedUnits((currentUnits) => currentUnits.filter((unit) => unit.id !== item.id));
      }}
    />
  );

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
            {totalPoints}/2000 Points
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Units</Text>

      {selectedUnits.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>
            No units added yet.
          </Text>
        </View>
      ) : (
        <FlatList
          data={selectedUnits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderSelectedUnitItem}
        />
      )}

      <AddUnitButton
        onPress={() => navigation.navigate("SelectUnit", { units: armyComposition.army.units })}
      />
    </SafeAreaView>
  );
}
