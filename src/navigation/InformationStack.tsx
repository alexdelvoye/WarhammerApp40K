import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import GameRulesScreen from "../screens/GameRulesScreen";

import ProfileScreen from "../screens/ProfileScreen";

export type InformationStackParamList = {
  GameRules: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<InformationStackParamList>();

export default function InformationStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="GameRules"
        component={GameRulesScreen}
        options={{
          header: () => <Header title="Game Rules" />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <Header title="Profile" canGoBack={true} />,
        }}
      />
    </Stack.Navigator>
  );
}
