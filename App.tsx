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
  // Auth state decides which part of the app should be visible.
  const { currentUser, loading } = useAuth();
  const [fontsLoaded] = useLoadFonts();

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // Keeps the Redux army list synchronized with Firestore while a user is logged in.
  useLoadArmyCompositions();

  useEffect(() => {
    // The splash screen is shown briefly so loading does not feel abrupt.
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSplashScreen || !fontsLoaded) {
    // The app waits here until authentication, fonts, and the short splash delay are finished.
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {/* Logged-in users see the app; visitors only see authentication screens. */}
      {currentUser ? <BattleForgeInformationDrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // Provider makes the Redux store available to every screen and component.
    <Provider store={store}>
      {/* PersistGate reloads saved Redux data before rendering the app UI. */}
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          {/* Context providers expose authentication and theme state globally. */}
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
