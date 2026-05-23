import { useEffect, useState } from "react";

import { database } from "../config/firebase";
import { getArmies } from "../services/firestoreService";
import { Army } from "../types/army";

export function useArmies() {
  const [armies, setArmies] = useState<Army[]>([]);

  useEffect(() => {
    const loadArmies = async () => {
      const fetchedArmies = await getArmies(database);
      setArmies(fetchedArmies);
    };

    loadArmies();
  }, []);

  return {
    armies,
  };
}
