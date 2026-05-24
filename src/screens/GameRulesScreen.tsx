import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../hooks/useTheme";

import { GameRulesScreenStyles as styles } from "../styles/gameRulesScreenStyles";
import { themeColors } from "../styles/themeColors";

export default function GameRulesScreen() {
  const { theme } = useTheme();
  const colors = themeColors[theme];

  const cardStyle = [
    styles.card,
    { backgroundColor: colors.card, borderColor: colors.border },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <ScrollView>
          <Text style={styles.title}>Game Rules</Text>

          <View style={cardStyle}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Battle Round
            </Text>
            <Text style={[styles.cardText, { color: colors.subText }]}>
              A game is played over several battle rounds. In each battle round,
              both players take turns activating their armies.
            </Text>
          </View>

          <View style={cardStyle}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Movement Phase
            </Text>
            <Text style={[styles.cardText, { color: colors.subText }]}>
              Units can move across the battlefield based on their movement
              value. Movement is important for taking objectives and positioning
              units.
            </Text>
          </View>

          <View style={cardStyle}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Shooting Phase
            </Text>
            <Text style={[styles.cardText, { color: colors.subText }]}>
              Units with ranged weapons can attack enemy units that are visible
              and within range.
            </Text>
          </View>

          <View style={cardStyle}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Charge & Fight Phase
            </Text>
            <Text style={[styles.cardText, { color: colors.subText }]}>
              Units can charge into melee combat and fight enemy units in close
              range.
            </Text>
          </View>

          <View style={cardStyle}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Objective Control
            </Text>
            <Text style={[styles.cardText, { color: colors.subText }]}>
              Units use their Objective Control value to claim objectives and
              score victory points.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
