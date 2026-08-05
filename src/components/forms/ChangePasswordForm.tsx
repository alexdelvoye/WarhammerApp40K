import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changePasswordValidationSchema } from "../../validation/changePasswordValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";
import { themeColors } from "../../styles/themeColors";

// ProfileScreen supplies the Firebase password update action.
type ChangePasswordFormProps = {
  changePassword: (currentPassword: string, newPassword: string) => void;
};

const ChangePasswordForm = ({ changePassword }: ChangePasswordFormProps) => {
  // Reuse profile styles so account forms have a consistent layout.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Change Password</Text>

      <Formik
        // The validation schema checks password rules and matching confirmation.
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={changePasswordValidationSchema}
        onSubmit={(values) => {
          // Only current and new password are needed by Firebase.
          changePassword(values.currentPassword, values.newPassword);
        }}
      >
        {(props) => (
          <View>
            {/* Firebase needs the current password before accepting sensitive changes. */}
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

            {/* New password follows the same minimum-length rule as registration. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="New password"
              placeholderTextColor={colors.subText}
              secureTextEntry
              value={props.values.newPassword}
              onChangeText={props.handleChange("newPassword")}
              onBlur={props.handleBlur("newPassword")}
            />

            {props.touched.newPassword && props.errors.newPassword && (
              <Text style={styles.errorText}>{props.errors.newPassword}</Text>
            )}

            {/* Confirmation prevents accidental password typos. */}
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Confirm new password"
              placeholderTextColor={colors.subText}
              secureTextEntry
              value={props.values.confirmNewPassword}
              onChangeText={props.handleChange("confirmNewPassword")}
              onBlur={props.handleBlur("confirmNewPassword")}
            />

            {props.touched.confirmNewPassword &&
              props.errors.confirmNewPassword && (
                <Text style={styles.errorText}>
                  {props.errors.confirmNewPassword}
                </Text>
              )}

            {/* Formik handles validation before calling the profile update callback. */}
            <Pressable
              style={[styles.button, { backgroundColor: colors.button }]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={[styles.buttonText, { color: colors.buttonText }]}>
                Update Password
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangePasswordForm;
