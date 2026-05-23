import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../services/authService";

import LogoutButton from "../components/buttons/LogoutButton";

import { ProfileScreenStyles as styles } from "../styles/profileScreenStyles";

export default function ProfileScreen() {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
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
