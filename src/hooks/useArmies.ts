import { useEffect, useState } from "react";

import { database } from "../config/firebase";
import { getArmies } from "../services/firestoreService";
import { Army } from "../types/army";

// Loads shared faction data from Firestore for screens that need army choices.
export function useArmies() {
  // Empty initial state lets screens render before Firestore responds.
  const [armies, setArmies] = useState<Army[]>([]);

  useEffect(() => {
    const loadArmies = async () => {
      // Loads the selectable army factions from Firestore once when the screen needs them.
      const fetchedArmies = await getArmies(database);
      setArmies(fetchedArmies);
    };

    loadArmies();
  }, []);

  // Return an object so more army-loading state can be added later without API churn.
  return {
    armies,
  };
}
