import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  verifyBeforeUpdateEmail,
  updatePassword,
  User,
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

export const updateUserEmail = async (
  user: User,
  password: string,
  newEmail: string,
) => {
  if (!user.email) {
    throw new Error("No email found for current user");
  }

  const credential = EmailAuthProvider.credential(user.email, password);

  await reauthenticateWithCredential(user, credential);

  await verifyBeforeUpdateEmail(user, newEmail);
};

export const updateUserPassword = async (
  user: User,
  currentPassword: string,
  newPassword: string,
) => {
  if (!user.email) {
    throw new Error("No email found for current user");
  }

  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  await reauthenticateWithCredential(user, credential);

  return updatePassword(user, newPassword);
};
