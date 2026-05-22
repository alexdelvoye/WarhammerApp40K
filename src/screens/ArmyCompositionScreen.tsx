import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

import { BattleForgeStackParamList } from "../navigation/BattleForgeStack";

import { useAppDispatch } from "../store/hooks";
import { armyCompositionUnitsUpdated } from "../features/armyCompositions/armyCompositionSlice";

import AddUnitButton from "../components/buttons/AddUnitButton";
import SelectUnitModal from "../components/modals/SelectUnitModal";

import { ArmyCompositionScreenStyles as styles } from "../styles/armyCompositionScreenStyles";

import { Unit } from "../types/unit";
import { SelectedUnit } from "../types/selected_unit";
import UnitCard from "../components/cards/UnitCard";

type ArmyCompositionRouteProp = RouteProp<
  BattleForgeStackParamList,
  "ArmyComposition"
>;

export default function ArmyCompositionScreen() {
  const route = useRoute<ArmyCompositionRouteProp>();
  const { armyComposition } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const [selectedUnits, setSelectedUnits] = useState<SelectedUnit[]>(
    armyComposition.units.map((unit) => ({
      ...unit,
      armyCompositionUnitId: uuid.v4().toString(),
    })),
  );

  const totalPoints = selectedUnits.reduce(
    (totalPoints, unit) => totalPoints + unit.points,
    0,
  );

  const isOverPointLimit = totalPoints > 2000;

  const renderSelectedUnitItem = ({ item }: { item: SelectedUnit }) => (
    <UnitCard
      unit={item}
      buttonText="-"
      onPress={() => removeUnit(item.armyCompositionUnitId)}
    />
  );

  const addUnit = (unit: Unit) => {
    const selectedUnit: SelectedUnit = {
      ...unit,
      armyCompositionUnitId: uuid.v4().toString(),
    };

    const updatedUnits = [...selectedUnits, selectedUnit];

    setSelectedUnits((currentUnits) => [...currentUnits, selectedUnit]);

    dispatch(
      armyCompositionUnitsUpdated({
        armyCompositionId: armyComposition.id,
        units: updatedUnits,
        totalPoints: updatedUnits.reduce(
          (totalPoints, unit) => totalPoints + unit.points,
          0,
        ),
      }),
    );
  };

  const removeUnit = (armyCompositionUnitId: string) => {
    const updatedUnits = selectedUnits.filter(
      (unit) => unit.armyCompositionUnitId !== armyCompositionUnitId,
    );

    setSelectedUnits(updatedUnits);

    dispatch(
      armyCompositionUnitsUpdated({
        armyCompositionId: armyComposition.id,
        units: updatedUnits,
        totalPoints: updatedUnits.reduce(
          (totalPoints, unit) => totalPoints + unit.points,
          0,
        ),
      }),
    );
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
  );
}
