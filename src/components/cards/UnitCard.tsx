import React from "react";
import { Pressable, Text, View } from "react-native";

import { Unit } from "../../types/unit";

import { useTheme } from "../../hooks/useTheme";

import { UnitCardStyles as styles } from "../../styles/unitCardStyles";
import { themeColors } from "../../styles/themeColors";

// The same unit card is used for adding available units and removing selected units.
type UnitCardProps = {
  unit: Unit;
  buttonText: string;
  onPress: () => void;
};

const UnitCard = ({ unit, buttonText, onPress }: UnitCardProps) => {
  // Theme values are applied at render time so cards update immediately after toggling.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.container}>
        {/* Primary unit information is grouped together on the left side of the card. */}
        <Text style={[styles.name, { color: colors.text }]}>{unit.name}</Text>

        <Text style={[styles.stats, { color: colors.subText }]}>
          {`M ${unit.movement}" | T ${unit.toughness} | Sv ${unit.save}+ | W ${unit.wounds}`}
        </Text>

        <Text style={[styles.points, { color: colors.subText }]}>
          {unit.points} Points
        </Text>
      </View>

      {/* Button text controls whether the action reads as add or remove. */}
      <Pressable
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default UnitCard;
