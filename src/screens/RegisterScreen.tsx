import React, { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../config/firebase";
import { register } from "../services/authService";
import RegisterForm from "../components/forms/RegisterForm";

import { RegisterScreenStyles as styles } from "../styles/registerScreenStyles";

export default function RegisterScreen() {
  const [firebaseError, setFirebaseError] = useState("");

  const handleRegister = async (email: string, password: string) => {
    try {
      setFirebaseError("");
      await register(auth, email, password);
    } catch {
      setFirebaseError("Registration failed");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <RegisterForm handleRegister={handleRegister} />

        <Text style={styles.errorText}>{firebaseError}</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
