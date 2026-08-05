import { useEffect } from "react";

import { database } from "../config/firebase";
import { armyCompositionsLoaded } from "../features/armyCompositions/armyCompositionSlice";
import { subscribeToArmyCompositions } from "../services/firestoreService";
import { useAppDispatch } from "../store/hooks";

import { useAuth } from "./useAuth";

// Global sync hook that mirrors the logged-in user's Firestore compositions into Redux.
export function useLoadArmyCompositions() {
  // Dispatch writes incoming snapshots into the persisted Redux store.
  const dispatch = useAppDispatch();
  // The current user's uid determines which Firestore subcollection to listen to.
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
