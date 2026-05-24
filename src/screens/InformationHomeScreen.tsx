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
  const navigation =
    useNavigation<StackNavigationProp<InformationStackParamList>>();

  const { theme } = useTheme();
  const colors = themeColors[theme];

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <Text style={styles.title}>INFORMATION</Text>

        <View style={styles.cardContainer}>
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
