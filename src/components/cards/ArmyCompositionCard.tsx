import React from "react";
import { Pressable, Text, View } from "react-native";

import { ArmyComposition } from "../../types/army_composition";

import { ArmyCompositionCardStyles as styles } from "../../styles/armyCompositionCardStyles";

type ArmyCompositionCardProps = {
  armyComposition: ArmyComposition;
  onPress: () => void;
};

const ArmyCompositionCard = ({
  armyComposition,
  onPress,
}: ArmyCompositionCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{armyComposition.name}</Text>

      <Text style={styles.subtitle}>{armyComposition.army.armyRule}</Text>

      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>
          {armyComposition.totalPoints} / 2000 Points
        </Text>
      </View>
    </Pressable>
  );
};

export default ArmyCompositionCard;
