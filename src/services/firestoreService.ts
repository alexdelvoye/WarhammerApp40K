import {
  Firestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { ArmyComposition } from "../types/army_composition";

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
