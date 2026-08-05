import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Army } from "../types/army";

import { useArmies } from "../hooks/useArmies";
import { useTheme } from "../hooks/useTheme";

import { ArmyRulesScreenStyles as styles } from "../styles/armyRulesScreenStyles";
import { themeColors } from "../styles/themeColors";

export default function ArmyRulesScreen() {
  // Rules are read from the shared Firestore army documents.
  const { armies } = useArmies();

  // Theme colors keep the information cards consistent with the rest of the app.
  const { theme } = useTheme();
  const colors = themeColors[theme];

  const renderArmyRuleItem = ({ item }: { item: Army }) => {
    return (
      // Each army is rendered as one compact rule card.
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          {item.name}
        </Text>

        {/* Label separates the rule category from the actual rule text. */}
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
        // Top safe area is handled by the shared custom header.
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <Text style={styles.title}>ARMY RULES</Text>

        <FlatList
          // FlatList keeps the screen efficient if more armies are seeded later.
          data={armies}
          keyExtractor={(item) => item.id}
          renderItem={renderArmyRuleItem}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
