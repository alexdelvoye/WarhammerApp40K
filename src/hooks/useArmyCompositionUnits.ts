import { useState } from "react";
import uuid from "react-native-uuid";

import { armyCompositionUnitsUpdated } from "../features/armyCompositions/armyCompositionSlice";
import { useAppDispatch } from "../store/hooks";
import { ArmyComposition } from "../types/army_composition";
import { SelectedUnit } from "../types/selected_unit";
import { Unit } from "../types/unit";

export function useArmyCompositionUnits(armyComposition: ArmyComposition) {
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

  return {
    selectedUnits,
    totalPoints,
    isOverPointLimit: totalPoints > 2000,
    addUnit,
    removeUnit,
  };
}
