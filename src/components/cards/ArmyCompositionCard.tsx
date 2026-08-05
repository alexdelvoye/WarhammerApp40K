import React from "react";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ArmyComposition } from "../../types/army_composition";
import { armyImages } from "../../utils/armyImages";

import { useTheme } from "../../hooks/useTheme";

import { ArmyCompositionCardStyles as styles } from "../../styles/armyCompositionCardStyles";
import { themeColors } from "../../styles/themeColors";

// HomeScreen supplies the composition and actions for opening or deleting it.
type ArmyCompositionCardProps = {
  armyComposition: ArmyComposition;
  onPress: () => void;
  onDelete: () => void;
};

const ArmyCompositionCard = ({
  armyComposition,
  onPress,
  onDelete,
}: ArmyCompositionCardProps) => {
  // Theme colors are layered over the faction background image.
  const { theme } = useTheme();
  const colors = themeColors[theme];
  // The card warns visually when the list exceeds the standard point target.
  const isOverPointLimit = armyComposition.totalPoints > 2000;

  return (
    <View style={styles.container}>
      {/* Pressing the main card opens the army composition detail screen. */}
      <Pressable
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
        onPress={onPress}
      >
        <ImageBackground
          source={armyImages[armyComposition.army.imageKey]}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <View style={styles.overlay}>
            {/* Name, faction, and rule summarize the list before opening it. */}
            <Text style={styles.title}>{armyComposition.name}</Text>

            <Text style={styles.armyName}>{armyComposition.army.name}</Text>

            <Text style={styles.subtitle}>{armyComposition.army.armyRule}</Text>

            <View
              style={[
                styles.pointsContainer,
                { backgroundColor: colors.button },
              ]}
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
          </View>
        </ImageBackground>
      </Pressable>

      {onDelete && (
        // Delete is a separate press target so opening and deleting never conflict.
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
