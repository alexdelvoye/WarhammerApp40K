import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { ArmyComposition } from "../../types/army_composition";
import { SelectedUnit } from "../../types/selected_unit";

const initialState: ArmyComposition[] = [];

export const armyCompositionSlice = createSlice({
  name: "armyCompositions",
  initialState,
  reducers: {
    armyCompositionsLoaded(_state, action: { payload: ArmyComposition[] }) {
      return action.payload;
    },

    armyCompositionsCleared() {
      return [];
    },

    armyCompositionAdded(state, action: { payload: ArmyComposition }) {
      state.push(action.payload);
    },

    armyCompositionUnitsUpdated(
      state,
      action: {
        payload: {
          armyCompositionId: string;
          units: SelectedUnit[];
          totalPoints: number;
        };
      },
    ) {
      const armyComposition = state.find(
        (armyComposition) =>
          armyComposition.id === action.payload.armyCompositionId,
      );

      if (armyComposition) {
        armyComposition.units = action.payload.units;
        armyComposition.totalPoints = action.payload.totalPoints;
      }
    },

    armyCompositionDeleted(state, action: { payload: string }) {
      return state.filter((composition) => composition.id !== action.payload);
    },
  },
});

export const selectArmyCompositions = (state: RootState) =>
  state.armyCompositions;

export const {
  armyCompositionsLoaded,
  armyCompositionsCleared,
  armyCompositionAdded,
  armyCompositionUnitsUpdated,
  armyCompositionDeleted,
} = armyCompositionSlice.actions;

export default armyCompositionSlice.reducer;
