import React from "react";
import { Pressable, Text } from "react-native";

import { LogoutButtonStyles as styles } from "../../styles/logoutButtonStyles";

type LogoutButtonProps = {
  onPress: () => void;
};

const LogoutButton = ({ onPress }: LogoutButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Sign out</Text>
    </Pressable>
  );
};

export default LogoutButton;
