import React, { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import AddUnitButton from "../components/buttons/AddUnitButton";
import UnitCard from "../components/cards/UnitCard";
import SelectUnitModal from "../components/modals/SelectUnitModal";

import { SelectedUnit } from "../types/selected_unit";

import { useArmyCompositionUnits } from "../hooks/useArmyCompositionUnits";
import { useTheme } from "../hooks/useTheme";

import { armyImages } from "../utils/armyImages";

import { ArmyCompositionScreenStyles as styles } from "../styles/armyCompositionScreenStyles";
import { themeColors } from "../styles/themeColors";

type ArmyCompositionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const route = useRoute<ArmyCompositionRouteProp>();
  const { armyComposition } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const { theme } = useTheme();
  const colors = themeColors[theme];

  const { selectedUnits, totalPoints, isOverPointLimit, addUnit, removeUnit } =
    useArmyCompositionUnits(armyComposition);

  const renderSelectedUnitItem = ({ item }: { item: SelectedUnit }) => (
    <UnitCard
      unit={item}
      buttonText="-"
      onPress={() => removeUnit(item.armyCompositionUnitId)}
    />
  );

  return (
    <ImageBackground
      source={require("../assets/images/screen_background.png")}
      style={styles.background}
    >
      <SafeAreaView
        style={styles.container}
        edges={["left", "right", "bottom"]}
      >
        <ImageBackground
          source={armyImages[armyComposition.army.imageKey]}
          style={[styles.summaryCard, { borderColor: colors.border }]}
          imageStyle={styles.summaryCardImage}
        >
          <View style={styles.summaryOverlay}>
            <Text style={[styles.title, { color: colors.text }]}>
              {armyComposition.name}
            </Text>

            <Text style={[styles.subtitle, { color: colors.subText }]}>
              {armyComposition.army.name}
            </Text>

            <Text style={[styles.rule, { color: colors.subText }]}>
              {armyComposition.army.armyRule}
            </Text>

            <View
              style={[styles.pointsBox, { backgroundColor: colors.button }]}
            >
              <Text
                style={[
                  styles.pointsText,
                  { color: colors.buttonText },
                  isOverPointLimit && styles.pointsTextError,
                ]}
              >
                {totalPoints}/2000 Points
              </Text>
            </View>
          </View>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Units</Text>

        {selectedUnits.length === 0 ? (
          <View
            style={[
              styles.emptyCard,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.emptyText, { color: colors.subText }]}>
              No units added yet.
            </Text>
          </View>
        ) : (
          <FlatList
            style={styles.unitList}
            data={selectedUnits}
            contentContainerStyle={styles.unitListContent}
            keyExtractor={(item) => item.armyCompositionUnitId.toString()}
            renderItem={renderSelectedUnitItem}
          />
        )}

        <View style={styles.addButtonContainer}>
          <AddUnitButton onPress={() => setModalVisible(true)} />
        </View>

        <SelectUnitModal
          visible={modalVisible}
          units={armyComposition.army.units}
          totalPoints={totalPoints}
          maxPoints={2000}
          onClose={() => setModalVisible(false)}
          onAddUnit={addUnit}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
