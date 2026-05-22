import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { registerValidationSchema } from "../../validation/registerValidationSchema";

import { RegisterScreenStyles as styles } from "../../styles/registerScreenStyles";

type RegisterFormProps = {
  handleRegister: (email: string, password: string) => void;
};

const RegisterForm = ({ handleRegister }: RegisterFormProps) => {
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
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#777"
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
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#777"
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
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="#777"
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
              style={styles.button}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
