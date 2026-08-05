import React from "react";
import { Pressable, Text } from "react-native";

import { useTheme } from "../../hooks/useTheme";

import { LogoutButtonStyles as styles } from "../../styles/logoutButtonStyles";
import { themeColors } from "../../styles/themeColors";

// ProfileScreen owns the logout workflow and passes it into this button.
type LogoutButtonProps = {
  onPress: () => void;
};

const LogoutButton = ({ onPress }: LogoutButtonProps) => {
  // Keep the button colors synchronized with the selected app theme.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    // Pressing this clears local composition state and signs out through Firebase.
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
