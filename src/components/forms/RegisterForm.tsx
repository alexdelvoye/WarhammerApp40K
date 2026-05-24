import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { registerValidationSchema } from "../../validation/registerValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { RegisterScreenStyles as styles } from "../../styles/registerScreenStyles";
import { themeColors } from "../../styles/themeColors";

type RegisterFormProps = {
  handleRegister: (email: string, password: string) => void;
};

const RegisterForm = ({ handleRegister }: RegisterFormProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          handleRegister(values.email, values.password);
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
              placeholder="Email"
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

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Confirm password"
              placeholderTextColor={colors.subText}
              value={props.values.confirmPassword}
              onChangeText={props.handleChange("confirmPassword")}
              onBlur={props.handleBlur("confirmPassword")}
              secureTextEntry
            />

            <Text style={styles.errorText}>
              {props.touched.confirmPassword && props.errors.confirmPassword
                ? props.errors.confirmPassword
                : ""}
            </Text>

            <Pressable
              style={[styles.button, { backgroundColor: colors.button }]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={[styles.buttonText, { color: colors.buttonText }]}>
                Register
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
