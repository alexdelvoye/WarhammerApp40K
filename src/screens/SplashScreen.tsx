import React from "react";
import { ImageBackground, View } from "react-native";

import { SplashScreenStyles as styles } from "../styles/splashScreenStyles";

export default function SplashScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/splash_screen_background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
    </ImageBackground>
  );
}
