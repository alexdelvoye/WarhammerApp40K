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
  // This screen needs the selected composition, so it is passed as a route parameter.
  ArmyComposition: { armyComposition: ArmyComposition };
};

const Stack = createStackNavigator<BattleForgeStackParamList>();

export default function BattleForgeStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      {/* Stack screens are pages in the army-building part of the app. */}
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
          // canGoBack shows a back button in our custom Header.
          header: () => <Header title="Create Army" canGoBack={true} />,
        }}
      />

      <Stack.Screen
        name="ArmyComposition"
        component={ArmyCompositionScreen}
        options={({ navigation }) => ({
          // Custom back behavior returns to Home instead of stacking duplicate detail screens.
          header: () => (
            <Header
              title="Army"
              canGoBack={true}
              onBackPress={() => navigation.navigate("Home")}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
