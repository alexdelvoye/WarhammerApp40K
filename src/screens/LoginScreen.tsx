import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

import { auth } from "../config/firebase";
import { login } from "../services/authService";

import { AuthStackParamList } from "../navigation/AuthStack";

import LoginForm from "../components/forms/LoginForm";

import { useTheme } from "../hooks/useTheme";

import { LoginScreenStyles as styles } from "../styles/loginScreenStyles";
import { themeColors } from "../styles/themeColors";

type LoginScreenProps = StackScreenProps<AuthStackParamList, "Login">;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [firebaseError, setFirebaseError] = useState("");

  const { theme } = useTheme();
  const colors = themeColors[theme];

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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("../assets/images/screen_background.png")}
          style={[styles.background, { backgroundColor: colors.background }]}
        >
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <LoginForm handleLogin={handleLogin} />

            <Text style={styles.errorText}>{firebaseError}</Text>

            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerText}>
                No account yet? Register here
              </Text>
            </Pressable>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
