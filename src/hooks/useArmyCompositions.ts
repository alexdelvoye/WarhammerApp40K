import { database } from "../config/firebase";
import {
  armyCompositionDeleted,
  selectArmyCompositions,
} from "../features/armyCompositions/armyCompositionSlice";
import { deleteArmyComposition } from "../services/firestoreService";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useAuth } from "./useAuth";

export function useArmyCompositions() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  const armyCompositions = useAppSelector(selectArmyCompositions);

  const deleteComposition = async (id: string) => {
    dispatch(armyCompositionDeleted(id));

    if (currentUser) {
      await deleteArmyComposition(database, currentUser.uid, id);
    }
  };

  return {
    armyCompositions,
    deleteComposition,
  };
}
