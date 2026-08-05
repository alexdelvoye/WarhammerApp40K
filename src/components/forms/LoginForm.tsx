import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { loginValidationSchema } from "../../validation/loginValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { LoginScreenStyles as styles } from "../../styles/loginScreenStyles";
import { themeColors } from "../../styles/themeColors";

// LoginScreen provides the Firebase login callback; this form only collects values.
type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
};

const LoginForm = ({ handleLogin }: LoginFormProps) => {
  // Inputs and button colors follow the global app theme.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          // The screen handles Firebase errors, keeping this form focused on input.
          handleLogin(values.email, values.password);
        }}
      >
        {(props) => (
          <View>
            {/* Controlled email field writes directly into Formik state. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="email"
              placeholderTextColor={colors.subText}
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              autoCapitalize="none"
            />

            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email
                ? props.errors.email
                : ""}
            </Text>

            {/* Password input is hidden by secureTextEntry before submission. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Password"
              placeholderTextColor={colors.subText}
              value={props.values.password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              secureTextEntry
            />

            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password
                ? props.errors.password
                : ""}
            </Text>

            {/* Formik validates first, then calls onSubmit when the form is valid. */}
            <Pressable
              style={[styles.button, { backgroundColor: colors.button }]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={[styles.buttonText, { color: colors.buttonText }]}>
                Login
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
