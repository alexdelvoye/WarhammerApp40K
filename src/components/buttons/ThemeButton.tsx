import React from "react";
import { Pressable, Text } from "react-native";

import { ThemeButtonStyles as styles } from "../../styles/themeButtonStyles";
import { themeColors } from "../../styles/themeColors";

// The button receives theme state from ProfileScreen and asks the context to toggle it.
type ThemeButtonProps = {
  theme: "dark" | "light";
  onPress: () => void;
};

const ThemeButton = ({ theme, onPress }: ThemeButtonProps) => {
  // Colors are read from the theme being displayed right now.
  const colors = themeColors[theme];

  return (
    // Button text announces the next theme, not the current one.
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.buttonText }]}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Theme
      </Text>
    </Pressable>
  );
};

export default ThemeButton;
