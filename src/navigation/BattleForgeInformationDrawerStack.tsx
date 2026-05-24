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
  // The drawer also uses the theme, so the side menu matches the selected app theme.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <Drawer.Navigator
      screenOptions={{
        // Headers are handled by the inner stacks, so the drawer does not render its own.
        headerShown: false,
        drawerStyle: {
          // This is the background color of the panel that slides in from the side.
          backgroundColor: colors.background,
        },
        // Active means the drawer item for the current section.
        drawerActiveBackgroundColor: colors.card,
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.subText,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        // Dark overlay makes the opened drawer stand out from the screen behind it.
        overlayColor: "rgba(0, 0, 0, 0.55)",
      }}
    >
      {/* Drawer tabs separate the army-building workflow from information/profile screens. */}
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
