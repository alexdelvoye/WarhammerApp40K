import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../screens/shared/Header";
import HomeScreen from "../screens/HomeScreen";
import ArmyCompositionScreen from "../screens/ArmyCompositionScreen";
import CreateArmyCompositionScreen from "../screens/CreateArmyCompositionScreen";

import { ArmyComposition } from "../types/army_composition";

export type BattleForgeStackParamList = {
  Home: undefined;
  CreateArmyComposition: undefined;
  ArmyComposition: { armyComposition: ArmyComposition };
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
        options={({ navigation }) => ({
          header: () => (
            <Header
              title="Army Composition"
              canGoBack={true}
              onBackPress={() => navigation.navigate("Home")}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
