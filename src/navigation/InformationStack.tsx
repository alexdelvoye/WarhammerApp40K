import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import GameRulesScreen from "../screens/GameRulesScreen";

export type InformationStackParamList = {
  GameRules: undefined;
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
    </Stack.Navigator>
  );
};