import React from "react";
import { Pressable, Text } from "react-native";

import { ThemeButtonStyles as styles } from "../../styles/themeButtonStyles";
import { themeColors } from "../../styles/themeColors";

type ThemeButtonProps = {
  theme: "dark" | "light";
  onPress: () => void;
};

const ThemeButton = ({ theme, onPress }: ThemeButtonProps) => {
  const colors = themeColors[theme];

  return (
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
