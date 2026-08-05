import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

// Auth stack routes do not require route params.
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Typed stack catches mistakes in auth screen names during development.
const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    // Auth screens draw their own layout, so the default stack header is hidden.
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Login is the first screen visitors see before authentication. */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Register creates a Firebase account and then returns through auth state. */}
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
