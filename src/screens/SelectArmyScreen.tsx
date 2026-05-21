import React, { useState } from "react";
import { Pressable, Text, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Army } from "../types/army";

import { armies } from "../data/mockArmies";

import { SelectArmyScreenStyles as styles } from "../styles/selectArmyScreenStyles";

export default function SelectArmyScreen() {
  const [armyCompositionName, setArmyCompositionName] = useState("");
  const [selectedArmy, setSelectedArmy] = useState<Army | null>(null);

  const renderArmyItem = ({ item }: { item: Army }) => {
    const isSelected = selectedArmy?.id === item.id;

    return (
      <Pressable
        style={[styles.armyButton, isSelected && styles.selectedArmyButton]}
        onPress={() => setSelectedArmy(item)}
      >
        <Text style={styles.armyText}>{item.name}</Text>
        <Text style={styles.armyRule}>{item.armyRule}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Army Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter army name"
        placeholderTextColor="#777"
        value={armyCompositionName}
        onChangeText={setArmyCompositionName}
      />

      <Text style={styles.label}>Select Army</Text>

      <FlatList
        data={armies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderArmyItem}
      />

      <Pressable style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Army</Text>
      </Pressable>
    </SafeAreaView>
  );
}
