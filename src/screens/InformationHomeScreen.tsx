import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { InformationStackParamList } from "../navigation/InformationStack";

import { useTheme } from "../hooks/useTheme";

import { InformationHomeScreenStyles as styles } from "../styles/informationHomeScreenStyles";
import { themeColors } from "../styles/themeColors";

export default function InformationHomeScreen() {
  // Typed navigation limits destinations to the Information stack screens.
  const navigation =
    useNavigation<StackNavigationProp<InformationStackParamList>>();

  // Information cards use global theme colors.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        // Top inset is already covered by the stack header.
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <Text style={styles.title}>INFORMATION</Text>

        <View style={styles.cardContainer}>
          {/* Opens account settings, theme toggle, and logout. */}
          <Pressable
            style={[
              styles.card,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={[styles.cardText, { color: colors.text }]}>
              Profile
            </Text>
          </Pressable>

          {/* Opens static general game rules. */}
          <Pressable
            style={[
              styles.card,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => navigation.navigate("GameRules")}
          >
            <Text style={[styles.cardText, { color: colors.text }]}>
              Game Rules
            </Text>
          </Pressable>

          {/* Opens Firestore-loaded army rule summaries. */}
          <Pressable
            style={[
              styles.card,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => navigation.navigate("ArmyRules")}
          >
            <Text style={[styles.cardText, { color: colors.text }]}>
              Army Rules
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
