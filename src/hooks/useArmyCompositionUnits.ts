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

  // Give every selected unit a unique id, even if the same unit type is added twice.
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

  // One helper updates local state, Redux, and Firestore together.
  const saveUpdatedUnits = async (
    updatedUnits: SelectedUnit[],
    updatedTotalPoints: number,
  ) => {
    // Local state updates the current screen immediately.
    setSelectedUnits(updatedUnits);

    // Redux keeps the same composition updated on other screens, like Home.
    dispatch(
      armyCompositionUnitsUpdated({
        armyCompositionId: armyComposition.id,
        units: updatedUnits,
        totalPoints: updatedTotalPoints,
      }),
    );

    if (currentUser) {
      // Firestore saves the change so it is still there after reopening the app.
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
    // Copy the unit profile and add an id for this specific selected copy.
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
    // Remove only the selected copy with this id, not every unit of the same type.
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
