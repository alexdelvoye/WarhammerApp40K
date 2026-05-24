import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changePasswordValidationSchema } from "../../validation/changePasswordValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";
import { themeColors } from "../../styles/themeColors";

type ChangePasswordFormProps = {
  changePassword: (currentPassword: string, newPassword: string) => void;
};

const ChangePasswordForm = ({ changePassword }: ChangePasswordFormProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Change Password</Text>

      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={changePasswordValidationSchema}
        onSubmit={(values) => {
          changePassword(values.currentPassword, values.newPassword);
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
