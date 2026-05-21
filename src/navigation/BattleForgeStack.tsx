import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import HomeScreen from "../screens/HomeScreen";

export type BattleForgeStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<BattleForgeStackParamList>();

export default function BattleForgeStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <Header title="Battle Forge" />,
        }}
      />
    </Stack.Navigator>
  );
};
