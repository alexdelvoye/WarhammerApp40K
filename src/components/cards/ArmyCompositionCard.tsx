import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ArmyComposition } from "../../types/army_composition";

import { useTheme } from "../../hooks/useTheme";

import { ArmyCompositionCardStyles as styles } from "../../styles/armyCompositionCardStyles";
import { themeColors } from "../../styles/themeColors";

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
  const { theme } = useTheme();
  const colors = themeColors[theme];
  const isOverPointLimit = armyComposition.totalPoints > 2000;

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.title, { color: colors.text }]}>
          {armyComposition.name}
        </Text>

        <Text style={[styles.subtitle, { color: colors.subText }]}>
          {armyComposition.army.armyRule}
        </Text>

        <View
          style={[styles.pointsContainer, { backgroundColor: colors.button }]}
        >
          <Text
            style={[
              styles.pointsText,
              { color: colors.buttonText },
              isOverPointLimit && styles.pointsTextError,
            ]}
          >
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
              color={pressed ? "#ff4d4d" : colors.text}
            />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default ArmyCompositionCard;
