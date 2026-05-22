import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import HomeScreen from "../screens/HomeScreen";
import ArmyCompositionScreen from "../screens/ArmyCompositionScreen";
import CreateArmyCompositionScreen from "../screens/CreateArmyCompositionScreen";
import SelectUnitScreen from "../screens/SelectUnitScreen";

import { ArmyComposition } from "../types/army_composition";
import { Unit } from "../types/unit";

export type BattleForgeStackParamList = {
  Home: undefined;
  CreateArmyComposition: undefined;
  ArmyComposition: { armyComposition: ArmyComposition };
  SelectUnit: { units: Unit[]; };
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
        name="CreateArmyComposition"
        component={CreateArmyCompositionScreen}
        options={{
          header: () => (
            <Header title="Create Army Composition" canGoBack={true} />
          ),
        }}
      />

      <Stack.Screen
        name="ArmyComposition"
        component={ArmyCompositionScreen}
        options={{
          header: () => <Header title="Army Composition" canGoBack={true} />,
        }}
      />

      <Stack.Screen
        name="SelectUnit"
        component={SelectUnitScreen}
        options={{
          presentation: "modal",
          header: () => <Header title="Select Unit" canGoBack={true} />,
        }}
      />
    </Stack.Navigator>
  );
}
