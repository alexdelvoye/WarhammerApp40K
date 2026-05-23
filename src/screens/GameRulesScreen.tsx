import React from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GameRulesScreenStyles as styles } from "../styles/gameRulesScreenStyles";

export default function GameRulesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Game Rules</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Battle Round</Text>
          <Text style={styles.cardText}>
            A game is played over several battle rounds. In each battle round,
            both players take turns activating their armies.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Movement Phase</Text>
          <Text style={styles.cardText}>
            Units can move across the battlefield based on their movement value.
            Movement is important for taking objectives and positioning units.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shooting Phase</Text>
          <Text style={styles.cardText}>
            Units with ranged weapons can attack enemy units that are visible
            and within range.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Charge & Fight Phase</Text>
          <Text style={styles.cardText}>
            Units can charge into melee combat and fight enemy units in close
            range.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Objective Control</Text>
          <Text style={styles.cardText}>
            Units use their Objective Control value to claim objectives and
            score victory points.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
