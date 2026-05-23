import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { InformationStackParamList } from "../navigation/InformationStack";

import { InformationHomeScreenStyles as styles } from "../styles/informationHomeScreenStyles";

export default function InformationHomeScreen() {
  const navigation =
    useNavigation<StackNavigationProp<InformationStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Information</Text>

      <View style={styles.cardContainer}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("GameRules")}
        >
          <Text style={styles.cardText}>Game Rules</Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("ArmyRules")}
        >
          <Text style={styles.cardText}>Army Rules</Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.cardText}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
