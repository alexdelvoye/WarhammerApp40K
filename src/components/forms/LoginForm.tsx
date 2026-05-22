import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Formik } from "formik";

import { loginValidationSchema } from "../../validation/loginValidationSchema";

import { LoginScreenStyles as styles } from "../../styles/loginScreenStyles";

type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
};

const LoginForm = ({ handleLogin }: LoginFormProps) => {
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
              style={styles.input}
              placeholder="email"
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

            <Pressable
              style={styles.button}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
