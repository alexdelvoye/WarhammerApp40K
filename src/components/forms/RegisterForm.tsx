import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { registerValidationSchema } from "../../validation/registerValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { RegisterScreenStyles as styles } from "../../styles/registerScreenStyles";
import { themeColors } from "../../styles/themeColors";

// RegisterScreen performs the Firebase registration after this form validates values.
type RegisterFormProps = {
  handleRegister: (email: string, password: string) => void;
};

const RegisterForm = ({ handleRegister }: RegisterFormProps) => {
  // Form controls use the same color palette as the current app theme.
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
          // Confirm password is only for validation, so it is not passed to Firebase.
          handleRegister(values.email, values.password);
        }}
      >
        {(props) => (
          <View>
            {/* Email is normalized by disabling automatic capitalization. */}
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

            {/* Password is hidden while typing to protect the credential. */}
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

            {/* Confirmation field is compared with password by the Yup schema. */}
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

            {/* Pressing register submits through Formik's validation flow. */}
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
