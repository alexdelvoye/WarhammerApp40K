import React, { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import { login } from "../services/authService";
import LoginForm from "../components/forms/LoginForm";

import { LoginScreenStyles as styles } from "../styles/loginScreenStyles";

export default function LoginScreen() {
  const [firebaseError, setFirebaseError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      setFirebaseError("");
      await login(auth, email, password);
    } catch {
      setFirebaseError("Login failed");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <LoginForm handleLogin={handleLogin} />

        <Text style={styles.errorText}>{firebaseError}</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
