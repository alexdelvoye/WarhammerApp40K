import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import HomeScreen from "../screens/HomeScreen";
import SelectArmyScreen from "../screens/SelectArmyScreen";

export type BattleForgeStackParamList = {
  Home: undefined;
  SelectArmy: undefined;
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

      <Stack.Screen
        name="SelectArmy"
        component={SelectArmyScreen}
        options={{
          header: () => <Header title="Select Army" canGoBack={true} />,
        }}
      />
    </Stack.Navigator>
  );
}
