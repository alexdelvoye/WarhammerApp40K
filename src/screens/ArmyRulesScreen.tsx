import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Army } from "../types/army";

import { useArmies } from "../hooks/useArmies";
import { useTheme } from "../hooks/useTheme";

import { ArmyRulesScreenStyles as styles } from "../styles/armyRulesScreenStyles";
import { themeColors } from "../styles/themeColors";

export default function ArmyRulesScreen() {
  const { armies } = useArmies();

  const { theme } = useTheme();
  const colors = themeColors[theme];

  const renderArmyRuleItem = ({ item }: { item: Army }) => {
    return (
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          {item.name}
        </Text>

        <Text style={[styles.ruleLabel, { color: colors.button }]}>
          Army Rule
        </Text>

        <Text style={[styles.cardText, { color: colors.subText }]}>
          {item.armyRule}
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <Text style={styles.title}>ARMY RULES</Text>

        <FlatList
          data={armies}
          keyExtractor={(item) => item.id}
          renderItem={renderArmyRuleItem}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
