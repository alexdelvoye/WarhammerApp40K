import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store/store";

import { AuthProvider } from "./src/contexts/AuthContext";
import { useAuth } from "./src/hooks/useAuth";

import { useLoadArmyCompositions } from "./src/hooks/useLoadArmyCompositions";

import BattleForgeInformationDrawerStack from "./src/navigation/BattleForgeInformationDrawerStack";
import AuthStack from "./src/navigation/AuthStack";

const AppContent = () => {
  const { currentUser, loading } = useAuth();

  useLoadArmyCompositions();

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      {currentUser ? <BattleForgeInformationDrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
