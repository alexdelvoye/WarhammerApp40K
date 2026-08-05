import { StyleSheet } from "react-native";

// Styles for the custom splash screen shown during app startup.
export const SplashScreenStyles = StyleSheet.create({
  // Splash artwork fills every available pixel.
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  // Subtle overlay keeps the splash image from feeling too bright.
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
});
