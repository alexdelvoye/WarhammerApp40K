import { useEffect } from "react";

import { database } from "../config/firebase";
import { armyCompositionsLoaded } from "../features/armyCompositions/armyCompositionSlice";
import { subscribeToArmyCompositions } from "../services/firestoreService";
import { useAppDispatch } from "../store/hooks";

import { useAuth } from "./useAuth";

export function useLoadArmyCompositions() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unsubscribe = subscribeToArmyCompositions(
      database,
      currentUser.uid,
      (armyCompositions) => {
        dispatch(armyCompositionsLoaded(armyCompositions));
      },
    );

    return unsubscribe;
  }, [currentUser, dispatch]);
}
