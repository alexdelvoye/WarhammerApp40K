import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { ArmyComposition } from "../types/army_composition";
import { Army } from "../types/army";
import { SelectedUnit } from "../types/selected_unit";

export const saveArmyComposition = (
  database: Firestore,
  userId: string,
  armyComposition: ArmyComposition,
) => {
  return setDoc(
    doc(database, "users", userId, "armyCompositions", armyComposition.id),
    armyComposition,
  );
};

export const getArmyCompositions = async (
  database: Firestore,
  userId: string,
): Promise<ArmyComposition[]> => {
  const querySnapshot = await getDocs(
    collection(database, "users", userId, "armyCompositions"),
  );

  return querySnapshot.docs.map((document) => {
    return document.data() as ArmyComposition;
  });
};

export const updateArmyCompositionUnits = (
  database: Firestore,
  userId: string,
  armyCompositionId: string,
  units: SelectedUnit[],
  totalPoints: number,
) => {
  return setDoc(
    doc(database, "users", userId, "armyCompositions", armyCompositionId),
    {
      units,
      totalPoints,
    },
    { merge: true },
  );
};

export const seedArmies = async (database: Firestore, armies: Army[]) => {
  for (const army of armies) {
    await setDoc(doc(database, "armies", army.id), army);
  }
};

export const getArmies = async (database: Firestore): Promise<Army[]> => {
  const querySnapshot = await getDocs(collection(database, "armies"));

  return querySnapshot.docs.map((document) => {
    return document.data() as Army;
  });
};
