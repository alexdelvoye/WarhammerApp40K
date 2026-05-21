import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BattleForgeInformationDrawerStack from "./src/navigation/BattleForgeInformationDrawerStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BattleForgeInformationDrawerStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
