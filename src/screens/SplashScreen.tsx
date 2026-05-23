import React from "react";
import { Image, Text, View } from "react-native";

import { SplashScreenStyles as styles } from "../styles/splashScreenStyles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/header_icon.png")}
        style={styles.icon}
      />

      <Text style={styles.title}>Warhammer 40K</Text>

      <Text style={styles.subtitle}>Battle Forge</Text>
    </View>
  );
}
