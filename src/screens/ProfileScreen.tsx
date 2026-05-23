import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import {
  logout,
  updateUserEmail,
  updateUserPassword,
} from "../services/authService";

import { useAppDispatch } from "../store/hooks";
import { armyCompositionsCleared } from "../features/armyCompositions/armyCompositionSlice";

import LogoutButton from "../components/buttons/LogoutButton";

import { ProfileScreenStyles as styles } from "../styles/profileScreenStyles";

import ChangePasswordForm from "../components/forms/ChangePasswordForm";
import ChangeEmailForm from "../components/forms/ChangeEmailForm";

export default function ProfileScreen() {
  const { currentUser } = useAuth();

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
    } catch (error) {
      console.log(error);

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
    } catch (error) {
      console.log(error);

      setUpdateMessage("Failed to update password.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Profile</Text>

          <Text style={styles.label}>Logged in as:</Text>

          <Text style={styles.email}>{currentUser?.email}</Text>

          <Text style={styles.errorText}>{updateMessage}</Text>

          <ChangeEmailForm changeEmail={handleChangeEmail} />

          <ChangePasswordForm changePassword={handleChangePassword} />

          <LogoutButton onPress={handleLogout} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
