import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ArmyCompositionStack from "./ArmyCompositionStack";
import InformationStack from "./InformationStack";

export type HomeStackParamList = {
  ArmyCompositionStack: undefined;
  InformationStack: undefined;
};

const Drawer = createDrawerNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="ArmyCompositionStack"
        component={ArmyCompositionStack}
      />
      <Drawer.Screen name="InformationStack" component={InformationStack} />
    </Drawer.Navigator>
  );
}
