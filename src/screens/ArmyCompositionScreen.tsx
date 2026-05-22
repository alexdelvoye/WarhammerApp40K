import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

type ArmyCompostionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const route = useRoute<ArmyCompostionRouteProp>();
  const { armyComposition } = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text>{armyComposition.name}</Text>
        <Text>{armyComposition.army.name}</Text>
        <Text>{armyComposition.army.armyRule}</Text>
        <Text>{armyComposition.totalPoints}/2000 Points</Text>
      </View>
    </SafeAreaView>
  );
}
