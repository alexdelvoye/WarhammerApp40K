import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9n8sXo7l2mLh1Z5v6X9Y8z7w6e5r4t3",
  authDomain: "warhammer40kapp.firebaseapp.com",
  projectId: "warhammer40kapp",
  storageBucket: "warhammer40kapp.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
