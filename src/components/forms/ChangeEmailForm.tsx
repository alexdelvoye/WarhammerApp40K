import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

import { changeEmailValidationSchema } from "../../validation/changeEmailValidationSchema";
import { ProfileScreenStyles as styles } from "../../styles/profileScreenStyles";

type ChangeEmailFormProps = {
  changeEmail: (currentPassword: string, newEmail: string) => void;
};

const ChangeEmailForm = ({ changeEmail }: ChangeEmailFormProps) => {
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
              style={styles.input}
              placeholder="Current password"
              placeholderTextColor="#777"
              secureTextEntry
              value={props.values.currentPassword}
              onChangeText={props.handleChange("currentPassword")}
              onBlur={props.handleBlur("currentPassword")}
            />

            <Text style={styles.errorText}>
              {props.touched.currentPassword && props.errors.currentPassword
                ? props.errors.currentPassword
                : ""}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="New email"
              placeholderTextColor="#777"
              autoCapitalize="none"
              value={props.values.newEmail}
              onChangeText={props.handleChange("newEmail")}
              onBlur={props.handleBlur("newEmail")}
            />

            <Text style={styles.errorText}>
              {props.touched.newEmail && props.errors.newEmail
                ? props.errors.newEmail
                : ""}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.buttonText}>Update Email</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangeEmailForm;
