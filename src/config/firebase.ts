import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIIuKWiLZCLCD-TFMInkzCWR5rKP1I1yU",
  authDomain: "warhammer40kmobileapp.firebaseapp.com",
  projectId: "warhammer40kmobileapp",
  storageBucket: "warhammer40kmobileapp.firebasestorage.app",
  messagingSenderId: "361367308492",
  appId: "1:361367308492:web:dcdb95c5ce4c40c0c7da69",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
