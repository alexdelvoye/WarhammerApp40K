import { useEffect } from "react";

import { database } from "../config/firebase";
import { armyCompositionsLoaded } from "../features/armyCompositions/armyCompositionSlice";
import { getArmyCompositions } from "../services/firestoreService";

import { useAppDispatch } from "../store/hooks";

import { useAuth } from "./useAuth";

export function useLoadArmyCompositions() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  useEffect(() => {
    const loadArmyCompositions = async () => {
      if (!currentUser) {
        return;
      }

      const armyCompositions = await getArmyCompositions(
        database,
        currentUser.uid,
      );

      dispatch(armyCompositionsLoaded(armyCompositions));
    };

    loadArmyCompositions();
  }, [currentUser, dispatch]);
}
