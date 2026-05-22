import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  signOut,
} from "firebase/auth";

export const register = (auth: Auth, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (auth: Auth, email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (auth: Auth) => {
  return signOut(auth);
};
