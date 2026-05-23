import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Army } from "../types/army";

import { useArmies } from "../hooks/useArmies";

import { ArmyRulesScreenStyles as styles } from "../styles/armyRulesScreenStyles";

export default function ArmyRulesScreen() {
  const { armies } = useArmies();

  const renderArmyRuleItem = ({ item }: { item: Army }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.name}</Text>

        <Text style={styles.ruleLabel}>Army Rule</Text>

        <Text style={styles.cardText}>{item.armyRule}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Army Rule</Text>

      <FlatList
        data={armies}
        keyExtractor={(item) => item.id}
        renderItem={renderArmyRuleItem}
      />
    </SafeAreaView>
  );
}
