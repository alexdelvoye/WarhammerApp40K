import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ArmyComposition } from "../../types/army_composition";

import { ArmyCompositionCardStyles as styles } from "../../styles/armyCompositionCardStyles";

type ArmyCompositionCardProps = {
  armyComposition: ArmyComposition;
  onPress: () => void;
  onDelete?: () => void;
};

const ArmyCompositionCard = ({
  armyComposition,
  onPress,
  onDelete,
}: ArmyCompositionCardProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.card} onPress={onPress}>
        <Text style={styles.title}>{armyComposition.name}</Text>

        <Text style={styles.subtitle}>{armyComposition.army.armyRule}</Text>

        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>
            {armyComposition.totalPoints} / 2000 Points
          </Text>
        </View>
      </Pressable>
      {onDelete && (
        <Pressable style={styles.deleteButton} onPress={onDelete}>
          {({ pressed }) => (
            <Ionicons
              name="trash-outline"
              size={24}
              color={pressed ? "#ff4d4d" : "white"}
            />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default ArmyCompositionCard;
