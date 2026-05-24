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
      // No logged-in user means there is no personal Firestore path to listen to.
      return;
    }

    // Subscribe once for the current user and push every Firestore update into Redux.
    const unsubscribe = subscribeToArmyCompositions(
      database,
      currentUser.uid,
      (armyCompositions) => {
        dispatch(armyCompositionsLoaded(armyCompositions));
      },
    );

    // When the user changes or the component unmounts, stop listening to Firestore.
    return unsubscribe;
  }, [currentUser, dispatch]);
}
