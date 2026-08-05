import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase project settings for the Battle Forge backend services.
const firebaseConfig = {
  apiKey: "AIzaSyAIIuKWiLZCLCD-TFMInkzCWR5rKP1I1yU",
  authDomain: "warhammer40kmobileapp.firebaseapp.com",
  projectId: "warhammer40kmobileapp",
  storageBucket: "warhammer40kmobileapp.firebasestorage.app",
  messagingSenderId: "361367308492",
  appId: "1:361367308492:web:dcdb95c5ce4c40c0c7da69",
};

// Initialize Firebase once, then share service instances across the app.
const app = initializeApp(firebaseConfig);

// Authentication instance used by AuthContext and authService.
export const auth = getAuth(app);
// Firestore instance used by hooks and firestoreService.
export const database = getFirestore(app);
