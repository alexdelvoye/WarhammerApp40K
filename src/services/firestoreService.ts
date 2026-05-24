import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { ArmyComposition } from "../types/army_composition";
import { Army } from "../types/army";
import { SelectedUnit } from "../types/selected_unit";

export const subscribeToArmyCompositions = (
  database: Firestore,
  userId: string,
  onArmyCompositionsChanged: (armyCompositions: ArmyComposition[]) => void,
) => {
  // onSnapshot keeps listening, so the app updates when Firestore data changes.
  return onSnapshot(
    collection(database, "users", userId, "armyCompositions"),
    (querySnapshot) => {
      // Firestore returns documents; the app needs them as normal ArmyComposition objects.
      const armyCompositions = querySnapshot.docs.map((document) => {
        return document.data() as ArmyComposition;
      });
      // Send the new list back to the hook that subscribed.
      onArmyCompositionsChanged(armyCompositions);
    },
  );
};

export const saveArmyComposition = (
  database: Firestore,
  userId: string,
  armyComposition: ArmyComposition,
) => {
  // Each user has their own armyCompositions subcollection.
  return setDoc(
    doc(database, "users", userId, "armyCompositions", armyComposition.id),
    armyComposition,
  );
};

export const updateArmyCompositionUnits = (
  database: Firestore,
  userId: string,
  armyCompositionId: string,
  units: SelectedUnit[],
  totalPoints: number,
) => {
  // merge keeps the name and army data, while replacing only units and totalPoints.
  return setDoc(
    doc(database, "users", userId, "armyCompositions", armyCompositionId),
    {
      units,
      totalPoints,
    },
    { merge: true },
  );
};

export const deleteArmyComposition = (
  database: Firestore,
  userId: string,
  armyCompositionId: string,
) => {
  // Deleting the document removes the army composition from the user's saved lists.
  return deleteDoc(
    doc(database, "users", userId, "armyCompositions", armyCompositionId),
  );
};

export const seedArmies = async (database: Firestore, armies: Army[]) => {
  // Helper for rebuilding the global armies collection during development or demos.
  for (const army of armies) {
    await setDoc(doc(database, "armies", army.id), army);
  }
};

export const getArmies = async (database: Firestore): Promise<Army[]> => {
  // Armies are shared data, so they are read from the top-level armies collection.
  const querySnapshot = await getDocs(collection(database, "armies"));

  // Convert every Firestore document into the Army type used by the UI.
  return querySnapshot.docs.map((document) => {
    return document.data() as Army;
  });
};
