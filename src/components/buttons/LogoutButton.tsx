import React from "react";
import { Pressable, Text } from "react-native";

import { useTheme } from "../../hooks/useTheme";

import { LogoutButtonStyles as styles } from "../../styles/logoutButtonStyles";
import { themeColors } from "../../styles/themeColors";

type LogoutButtonProps = {
  onPress: () => void;
};

const LogoutButton = ({ onPress }: LogoutButtonProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <Pressable
      style={[styles.button, { backgroundColor: colors.button }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.buttonText }]}>
        Sign out
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
