import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BattleForgeStack from "./BattleForgeStack";
import InformationStack from "./InformationStack";

export type BattleForgeInformationDrawerStackParamList = {
  BattleForgeStack: undefined;
  InformationStack: undefined;
};

const Drawer =
  createDrawerNavigator<BattleForgeInformationDrawerStackParamList>();

export default function BattleForgeInformationDrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#111",
        },
        drawerActiveBackgroundColor: "#1E1E1E",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#B0B0B0",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        overlayColor: "rgba(0, 0, 0, 0.55)",
      }}
    >
      <Drawer.Screen
        name="BattleForgeStack"
        component={BattleForgeStack}
        options={{ title: "Battle Forge" }}
      />

      <Drawer.Screen
        name="InformationStack"
        component={InformationStack}
        options={{ title: "Information" }}
      />
    </Drawer.Navigator>
  );
}
