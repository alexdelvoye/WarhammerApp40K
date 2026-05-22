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
import { login } from "../services/authService";
import LoginForm from "../components/forms/LoginForm";

import { AuthStackParamList } from "../navigation/AuthStack";

import { LoginScreenStyles as styles } from "../styles/loginScreenStyles";

type LoginScreenProps = StackScreenProps<AuthStackParamList, "Login">;

export default function LoginScreen({ navigation }: LoginScreenProps) {
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

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>No account yet? Register here</Text>
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
