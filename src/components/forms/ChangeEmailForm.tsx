import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changeEmailValidationSchema } from "../../validation/changeEmailValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";
import { themeColors } from "../../styles/themeColors";

// ProfileScreen provides the account-update action after this form validates.
type ChangeEmailFormProps = {
  changeEmail: (currentPassword: string, newEmail: string) => void;
};

const ChangeEmailForm = ({ changeEmail }: ChangeEmailFormProps) => {
  // Form fields match the current theme while reusing Profile screen styles.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Change Email</Text>

      <Formik
        // Formik manages both text fields and validates them with the schema.
        initialValues={{
          currentPassword: "",
          newEmail: "",
        }}
        validationSchema={changeEmailValidationSchema}
        onSubmit={(values) => {
          // The parent screen handles the Firebase call, keeping this form reusable.
          changeEmail(values.currentPassword, values.newEmail);
        }}
      >
        {(props) => (
          <View>
            {/* New email is collected first because it is the main user goal. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="New email"
              placeholderTextColor={colors.subText}
              autoCapitalize="none"
              value={props.values.newEmail}
              onChangeText={props.handleChange("newEmail")}
              onBlur={props.handleBlur("newEmail")}
            />

            {/* Validation errors are only shown after the user has touched the field. */}
            {props.touched.newEmail && props.errors.newEmail && (
              <Text style={styles.errorText}>{props.errors.newEmail}</Text>
            )}

            {/* Current password proves the user is allowed to change the account email. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Current password"
              placeholderTextColor={colors.subText}
              secureTextEntry
              value={props.values.currentPassword}
              onChangeText={props.handleChange("currentPassword")}
              onBlur={props.handleBlur("currentPassword")}
            />

            {props.touched.currentPassword && props.errors.currentPassword && (
              <Text style={styles.errorText}>
                {props.errors.currentPassword}
              </Text>
            )}

            {/* Submit asks Firebase to send a verification email for the new address. */}
            <Pressable
              style={[styles.button, { backgroundColor: colors.button }]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={[styles.buttonText, { color: colors.buttonText }]}>
                Update Email
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangeEmailForm;
