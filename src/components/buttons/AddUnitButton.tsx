import React from "react";
import { Pressable, Text } from "react-native";

import { useTheme } from "../../hooks/useTheme";

import { AddUnitButtonStyles as styles } from "../../styles/addUnitButtonStyles";
import { themeColors } from "../../styles/themeColors";

// Detail screen decides what happens when the add-unit button is pressed.
type AddUnitButtonProps = {
  onPress: () => void;
};

const AddUnitButton = ({ onPress }: AddUnitButtonProps) => {
  // Pull theme colors here so the reusable button works on both themes.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    // Opens the unit selection modal in ArmyCompositionScreen.
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.buttonText }]}>
        Add Unit
      </Text>
    </Pressable>
  );
};

export default AddUnitButton;
