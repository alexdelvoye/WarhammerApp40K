import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { ArmyComposition } from "../types/army_composition";
import { Army } from "../types/army";

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

export const seedArmies = (database: Firestore, armies: Army[]) => {
  armies.forEach((army) => {
    setDoc(doc(database, "armies", army.id), army);
  });
};

export const getArmies = async (database: Firestore): Promise<Army[]> => {
  const querySnapshot = await getDocs(collection(database, "armies"));

  return querySnapshot.docs.map((document) => {
    return document.data() as Army;
  });
};
