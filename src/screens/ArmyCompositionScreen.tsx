import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import AddUnitButton from "../components/buttons/AddUnitButton";
import SelectUnitModal from "../components/modals/SelectUnitModal";

import { ArmyCompositionScreenStyles as styles } from "../styles/armyCompositionScreenStyles";

import { Unit } from "../types/unit";
import UnitCard from "../components/cards/UnitCard";

type ArmyCompositionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const route = useRoute<ArmyCompositionRouteProp>();
  const { armyComposition } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedUnits, setSelectedUnits] = useState<Unit[]>(
    armyComposition.units,
  );

  const totalPoints = selectedUnits.reduce(
    (totalPoints, unit) => totalPoints + unit.points,
    0,
  );

  const isOverPointLimit = totalPoints > 2000;

  const renderSelectedUnitItem = ({ item }: { item: Unit }) => (
    <UnitCard
      unit={item}
      buttonText="-"
      onPress={() => {
        setSelectedUnits((currentUnits) =>
          currentUnits.filter((unit) => unit.id !== item.id),
        );
      }}
    />
  );

  const addUnit = (unit: Unit) => {
    setSelectedUnits((currentUnits) => [...currentUnits, unit]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summaryCard}>
        <Text style={styles.title}>{armyComposition.name}</Text>

        <Text style={styles.subtitle}>{armyComposition.army.name}</Text>

        <Text style={styles.rule}>{armyComposition.army.armyRule}</Text>

        <View style={styles.pointsBox}>
          <Text
            style={[
              styles.pointsText,
              isOverPointLimit && styles.pointsTextError,
            ]}
          >
            {totalPoints}/2000 Points
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Units</Text>

      {selectedUnits.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>No units added yet.</Text>
        </View>
      ) : (
        <FlatList
          style={styles.unitList}
          data={selectedUnits}
          contentContainerStyle={styles.unitListContent}
          keyExtractor={(item) => item.id.toString()}
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
  );
}
