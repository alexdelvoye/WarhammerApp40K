import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BattleForgeStack from "./BattleForgeStack";
import InformationStack from "./InformationStack";

import { useTheme } from "../hooks/useTheme";

import { themeColors } from "../styles/themeColors";

export type BattleForgeInformationDrawerStackParamList = {
  BattleForgeStack: undefined;
  InformationStack: undefined;
};

const Drawer =
  createDrawerNavigator<BattleForgeInformationDrawerStackParamList>();

export default function BattleForgeInformationDrawerStack() {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerActiveBackgroundColor: colors.card,
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.subText,
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
