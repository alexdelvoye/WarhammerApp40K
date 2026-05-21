import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BattleForgeStack from "./BattleForgeStack";
import InformationStack from "./InformationStack";

export type BattleForgeInformationDrawerStackParamList = {
  BattleForgeStack: undefined;
  InformationStack: undefined;
};

const Drawer = createDrawerNavigator<BattleForgeInformationDrawerStackParamList>();

export default function BattleForgeInformationDrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="BattleForgeStack"
        component={BattleForgeStack}
        options={{ title: "Battle Forge"}}
      />

      <Drawer.Screen
        name="InformationStack"
        component={InformationStack}
        options={{ title: "Information"}}
      />
    </Drawer.Navigator>
  );
};
