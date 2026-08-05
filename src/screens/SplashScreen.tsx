import React from "react";
import { ImageBackground, View } from "react-native";

import { SplashScreenStyles as styles } from "../styles/splashScreenStyles";

export default function SplashScreen() {
  return (
    // App.tsx shows this while auth, fonts, and the short splash delay are loading.
    <ImageBackground
      source={require("../assets/images/splash_screen_background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay slightly darkens the splash art. */}
      <View style={styles.overlay} />
    </ImageBackground>
  );
}
