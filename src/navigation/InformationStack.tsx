import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";

import InformationHomeScreen from "../screens/InformationHomeScreen";
import GameRulesScreen from "../screens/GameRulesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ArmyRulesScreen from "../screens/ArmyRulesScreen";

export type InformationStackParamList = {
  InformationHome: undefined;
  GameRules: undefined;
  Profile: undefined;
  ArmyRules: undefined;
};

const Stack = createStackNavigator<InformationStackParamList>();

export default function InformationStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      {/* This stack groups the non-army informational screens under one drawer tab. */}
      <Stack.Screen
        name="InformationHome"
        component={InformationHomeScreen}
        options={{
          header: () => <Header title="Information" />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <Header title="Profile" canGoBack={true} />,
        }}
      />

      <Stack.Screen
        name="GameRules"
        component={GameRulesScreen}
        options={{
          header: () => <Header title="Game Rules" canGoBack={true} />,
        }}
      />

      <Stack.Screen
        name="ArmyRules"
        component={ArmyRulesScreen}
        options={{
          header: () => <Header title="Army Rules" canGoBack={true} />,
        }}
      />
    </Stack.Navigator>
  );
}
