import { useState } from "react";
import uuid from "react-native-uuid";

import { database } from "../config/firebase";
import { updateArmyCompositionUnits } from "../services/firestoreService";
import { armyCompositionUnitsUpdated } from "../features/armyCompositions/armyCompositionSlice";
import { useAppDispatch } from "../store/hooks";

import { ArmyComposition } from "../types/army_composition";
import { SelectedUnit } from "../types/selected_unit";
import { Unit } from "../types/unit";

import { useAuth } from "./useAuth";

export function useArmyCompositionUnits(armyComposition: ArmyComposition) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  const [selectedUnits, setSelectedUnits] = useState<SelectedUnit[]>(
    armyComposition.units.map((unit) => ({
      ...unit,
      armyCompositionUnitId: uuid.v4().toString(),
    })),
  );

  const totalPoints = selectedUnits.reduce(
    (total, unit) => total + unit.points,
    0,
  );

  const saveUpdatedUnits = async (
    updatedUnits: SelectedUnit[],
    updatedTotalPoints: number,
  ) => {
    setSelectedUnits(updatedUnits);

    dispatch(
      armyCompositionUnitsUpdated({
        armyCompositionId: armyComposition.id,
        units: updatedUnits,
        totalPoints: updatedTotalPoints,
      }),
    );

    if (currentUser) {
      await updateArmyCompositionUnits(
        database,
        currentUser.uid,
        armyComposition.id,
        updatedUnits,
        updatedTotalPoints,
      );
    }
  };

  const addUnit = async (unit: Unit) => {
    const selectedUnit: SelectedUnit = {
      ...unit,
      armyCompositionUnitId: uuid.v4().toString(),
    };

    const updatedUnits = [...selectedUnits, selectedUnit];

    const updatedTotalPoints = updatedUnits.reduce(
      (total, unit) => total + unit.points,
      0,
    );

    await saveUpdatedUnits(updatedUnits, updatedTotalPoints);
  };

  const removeUnit = async (armyCompositionUnitId: string) => {
    const updatedUnits = selectedUnits.filter(
      (unit) => unit.armyCompositionUnitId !== armyCompositionUnitId,
    );

    const updatedTotalPoints = updatedUnits.reduce(
      (total, unit) => total + unit.points,
      0,
    );

    await saveUpdatedUnits(updatedUnits, updatedTotalPoints);
  };

  return {
    selectedUnits,
    totalPoints,
    isOverPointLimit: totalPoints > 2000,
    addUnit,
    removeUnit,
  };
}
