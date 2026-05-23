import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../services/authService";

import { useAppDispatch } from "../store/hooks";
import { armyCompositionsCleared } from "../features/armyCompositions/armyCompositionSlice";

import LogoutButton from "../components/buttons/LogoutButton";

import { ProfileScreenStyles as styles } from "../styles/profileScreenStyles";

export default function ProfileScreen() {
  const { currentUser } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(armyCompositionsCleared());
    await logout(auth);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Logged in as:</Text>

      <Text style={styles.email}>{currentUser?.email}</Text>

      <LogoutButton onPress={handleLogout} />
    </SafeAreaView>
  );
}
