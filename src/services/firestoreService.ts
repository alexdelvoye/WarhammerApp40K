import { Firestore, collection, addDoc, getDocs } from "firebase/firestore";

import { ArmyComposition } from "../types/army_composition";

export const saveArmyComposition = (
  database: Firestore,
  userId: string,
  armyComposition: ArmyComposition,
) => {
  return addDoc(
    collection(database, "users", userId, "armyCompositions"),
    armyComposition,
  );
};

export const getArmyCompositions = async (
  database: Firestore,
  userId: string,
) => {
  const querySnapshot = await getDocs(
    collection(database, "users", userId, "armyCompositions"),
  );

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
