import { database } from "../config/firebase";
import {
  armyCompositionDeleted,
  selectArmyCompositions,
} from "../features/armyCompositions/armyCompositionSlice";
import { deleteArmyComposition } from "../services/firestoreService";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useAuth } from "./useAuth";

// Gives screens a focused API for reading and deleting saved compositions.
export function useArmyCompositions() {
  // Dispatch updates local Redux state; auth identifies the Firestore path.
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  // Redux is the local source used by Home and detail screens.
  const armyCompositions = useAppSelector(selectArmyCompositions);

  const deleteComposition = async (id: string) => {
    // Optimistic update: remove it from the screen first, then delete it remotely.
    dispatch(armyCompositionDeleted(id));

    if (currentUser) {
      await deleteArmyComposition(database, currentUser.uid, id);
    }
  };

  // Keep consumers independent from Redux and Firestore implementation details.
  return {
    armyCompositions,
    deleteComposition,
  };
}
