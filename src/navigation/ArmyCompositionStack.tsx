import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ArmyComposition } from "../types/army_composition";
import SelectArmyScreen from "../screens/SelectArmyScreen";
import CreateArmyCompositionScreen from "../screens/CreateArmyCompositionScreen";
import ViewArmyCompositionScreen from "../screens/ViewArmyCompositionScreen";
import EditArmyCompositionScreen from "../screens/EditArmyCompositionScreen";

export type ArmyCompositionStackParamList = {
  SelectArmy: undefined;
  CreateArmyComposition: undefined;
  ViewArmyComposition: { compositionId: string };
  EditArmyComposition: { compositionId: string };
  Details: { armyComposition: ArmyComposition };
};

const Stack = createStackNavigator<ArmyCompositionStackParamList>();

export default function ArmyCompositionStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="SelectArmy"
        component={SelectArmyScreen}
        options={{
          title: "Select Army",
        }}
      />
      <Stack.Screen
        name="CreateArmyComposition"
        component={CreateArmyCompositionScreen}
        options={{
          title: "Create Army Composition",
        }}
      />
      <Stack.Screen
        name="ViewArmyComposition"
        component={ViewArmyCompositionScreen}
        options={{
          title: "View Army Composition",
        }}
      />
      <Stack.Screen
        name="EditArmyComposition"
        component={EditArmyCompositionScreen}
        options={{
          title: "Edit Army Composition",
        }}
      />
    </Stack.Navigator>
  );
}
