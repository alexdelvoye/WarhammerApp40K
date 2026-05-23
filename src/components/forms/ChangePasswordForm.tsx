import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changePasswordValidationSchema } from "../../validation/changePasswordValidationSchema";
import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";

type ChangePasswordFormProps = {
  changePassword: (currentPassword: string, newPassword: string) => void;
};

const ChangePasswordForm = ({ changePassword }: ChangePasswordFormProps) => {
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
              style={styles.input}
              placeholder="Current password"
              placeholderTextColor="#777"
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
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="#777"
              secureTextEntry
              value={props.values.newPassword}
              onChangeText={props.handleChange("newPassword")}
              onBlur={props.handleBlur("newPassword")}
            />

            {props.touched.newPassword && props.errors.newPassword && (
              <Text style={styles.errorText}>{props.errors.newPassword}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              placeholderTextColor="#777"
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
              style={styles.button}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.buttonText}>Update Password</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangePasswordForm;
