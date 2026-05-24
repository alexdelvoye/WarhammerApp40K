import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { ArmyComposition } from "../../types/army_composition";
import { SelectedUnit } from "../../types/selected_unit";

const initialState: ArmyComposition[] = [];

export const armyCompositionSlice = createSlice({
  name: "armyCompositions",
  initialState,
  reducers: {
    // Replaces the local Redux list with the latest Firestore snapshot.
    armyCompositionsLoaded(_state, action: { payload: ArmyComposition[] }) {
      return action.payload;
    },

    // Used on logout so the next user never sees the previous user's armies.
    armyCompositionsCleared() {
      return [];
    },

    // Immer lets Redux Toolkit write this as a push, while keeping state immutable internally.
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
      // Find the composition that changed, then update only its units and point total.
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
      // Return a new list without the composition whose id was deleted.
      return state.filter((composition) => composition.id !== action.payload);
    },
  },
});

// Selector gives components one reusable way to read compositions from Redux.
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
