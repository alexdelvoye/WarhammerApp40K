import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store";

import { AuthProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";

import { useAuth } from "./src/hooks/useAuth";
import { useLoadArmyCompositions } from "./src/hooks/useLoadArmyCompositions";
import { useLoadFonts } from "./src/hooks/useLoadFonts";

import AuthStack from "./src/navigation/AuthStack";
import BattleForgeInformationDrawerStack from "./src/navigation/BattleForgeInformationDrawerStack";

import SplashScreen from "./src/screens/SplashScreen";

const AppContent = () => {
  const { currentUser, loading } = useAuth();
  const [fontsLoaded] = useLoadFonts();

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useLoadArmyCompositions();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSplashScreen || !fontsLoaded) {
    return <SplashScreen />;
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
            <ThemeProvider>
              <AppContent />
            </ThemeProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
