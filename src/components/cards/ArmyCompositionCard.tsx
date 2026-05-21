import React from "react";
import { Pressable, Text, View } from "react-native";

import { ArmyComposition } from "../../types/army_composition";

import { armyCompositionCardStyles as styles } from "../../styles/armyCompositionCardStyles";

type ArmyCompositionCardProps = {
  armyComposition: ArmyComposition;
};

export default function ArmyCompositionCard({
  armyComposition,
}: ArmyCompositionCardProps) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.title}>{armyComposition.name}</Text>

      <Text style={styles.subtitle}>{armyComposition.army.armyRule}</Text>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>
          {armyComposition.totalPoints} / 2000 Points
        </Text>
      </View>
    </Pressable>
  );
}
