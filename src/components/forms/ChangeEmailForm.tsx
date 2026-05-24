import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changeEmailValidationSchema } from "../../validation/changeEmailValidationSchema";

import { useTheme } from "../../hooks/useTheme";

import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";
import { themeColors } from "../../styles/themeColors";

type ChangeEmailFormProps = {
  changeEmail: (currentPassword: string, newEmail: string) => void;
};

const ChangeEmailForm = ({ changeEmail }: ChangeEmailFormProps) => {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Change Email</Text>

      <Formik
        initialValues={{
          currentPassword: "",
          newEmail: "",
        }}
        validationSchema={changeEmailValidationSchema}
        onSubmit={(values) => {
          changeEmail(values.currentPassword, values.newEmail);
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
              placeholder="New email"
              placeholderTextColor={colors.subText}
              autoCapitalize="none"
              value={props.values.newEmail}
              onChangeText={props.handleChange("newEmail")}
              onBlur={props.handleBlur("newEmail")}
            />

            {props.touched.newEmail && props.errors.newEmail && (
              <Text style={styles.errorText}>{props.errors.newEmail}</Text>
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
