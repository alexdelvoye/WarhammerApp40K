import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import {
  logout,
  updateUserEmail,
  updateUserPassword,
} from "../services/authService";

import { armyCompositionsCleared } from "../features/armyCompositions/armyCompositionSlice";
import { useAppDispatch } from "../store/hooks";

import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";

import LogoutButton from "../components/buttons/LogoutButton";
import ThemeButton from "../components/buttons/ThemeButton";
import ChangeEmailForm from "../components/forms/ChangeEmailForm";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";

import { ProfileScreenStyles as styles } from "../styles/profileScreenStyles";

export default function ProfileScreen() {
  const { currentUser } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const [updateMessage, setUpdateMessage] = useState("");

  const handleLogout = async () => {
    dispatch(armyCompositionsCleared());

    await logout(auth);
  };

  const handleChangeEmail = async (
    currentPassword: string,
    newEmail: string,
  ) => {
    if (!currentUser) {
      return;
    }

    try {
      await updateUserEmail(currentUser, currentPassword, newEmail);

      setUpdateMessage("Verification email sent.");
    } catch {
      setUpdateMessage("Failed to update email.");
    }
  };

  const handleChangePassword = async (
    currentPassword: string,
    newPassword: string,
  ) => {
    if (!currentUser) {
      return;
    }

    try {
      await updateUserPassword(currentUser, currentPassword, newPassword);

      setUpdateMessage("Password updated successfully.");
    } catch {
      setUpdateMessage("Failed to update password.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("../assets/images/screen_background.png")}
          style={styles.background}
        >
          <SafeAreaView
            style={styles.container}
            edges={["left", "right", "bottom"]}
          >
            <ScrollView keyboardShouldPersistTaps="handled">
              <Text style={styles.title}>Profile</Text>

              <Text style={styles.label}>Logged in as:</Text>

              <Text style={styles.email}>{currentUser?.email}</Text>

              <Text style={styles.label}>Current theme:</Text>

              <Text style={styles.email}>{theme}</Text>

              <ThemeButton theme={theme} onPress={toggleTheme} />

              {updateMessage && (
                <Text style={styles.errorText}>{updateMessage}</Text>
              )}

              <ChangeEmailForm changeEmail={handleChangeEmail} />

              <ChangePasswordForm changePassword={handleChangePassword} />

              <LogoutButton onPress={handleLogout} />
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
