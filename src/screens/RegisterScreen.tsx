import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackScreenProps } from "@react-navigation/stack";

import { auth } from "../config/firebase";
import { register } from "../services/authService";

import { AuthStackParamList } from "../navigation/AuthStack";

import RegisterForm from "../components/forms/RegisterForm";

import { useTheme } from "../hooks/useTheme";

import { RegisterScreenStyles as styles } from "../styles/registerScreenStyles";
import { themeColors } from "../styles/themeColors";

type RegisterScreenProps = StackScreenProps<AuthStackParamList, "Register">;

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [firebaseError, setFirebaseError] = useState("");

  const { theme } = useTheme();
  const colors = themeColors[theme];

  const handleRegister = async (email: string, password: string) => {
    try {
      setFirebaseError("");
      // Creating the Firebase user also logs them in automatically.
      await register(auth, email, password);
    } catch {
      setFirebaseError("Registration failed");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* KeyboardAvoidingView prevents the keyboard from covering the register form. */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("../assets/images/screen_background.png")}
          style={[styles.background, { backgroundColor: colors.background }]}
        >
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
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
