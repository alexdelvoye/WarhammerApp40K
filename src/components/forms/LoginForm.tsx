import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { loginValidationSchema } from "../../validation/loginValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { LoginScreenStyles as styles } from "../../styles/loginScreenStyles";
import { themeColors } from "../../styles/themeColors";

type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
};

const LoginForm = ({ handleLogin }: LoginFormProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          handleLogin(values.email, values.password);
        }}
      >
        {(props) => (
          <View>
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
