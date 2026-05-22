import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackScreenProps } from "@react-navigation/stack";

import { auth } from "../config/firebase";
import { register } from "../services/authService";
import RegisterForm from "../components/forms/RegisterForm";

import { AuthStackParamList } from "../navigation/AuthStack";

import { RegisterScreenStyles as styles } from "../styles/registerScreenStyles";

type RegisterScreenProps = StackScreenProps<AuthStackParamList, "Register">;

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
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

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Already have an account? Login here
          </Text>
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
