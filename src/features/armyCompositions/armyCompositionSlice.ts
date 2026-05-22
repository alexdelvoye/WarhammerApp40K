import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

import { ArmyComposition } from "../../types/army_composition";
import { SelectedUnit } from "../../types/selected_unit";

const initialState: ArmyComposition[] = [];

export const armyCompositionSlice = createSlice({
  name: "armyCompostions",
  initialState,
  reducers: {
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
  },
});

export const selectArmyCompositions = (state: RootState) =>
  state.armyCompositions;

export const { armyCompositionAdded, armyCompositionUnitsUpdated } =
  armyCompositionSlice.actions;

export default armyCompositionSlice.reducer;
