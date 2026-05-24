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
  // Firebase creates the account and automatically signs the user in.
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (auth: Auth, email: string, password: string) => {
  // Firebase checks the credentials and updates AuthContext through its listener.
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = (auth: Auth) => {
  // Signing out also triggers the AuthContext listener, which returns the user to AuthStack.
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

  // Firebase requires recent login before sensitive actions like changing email.
  await reauthenticateWithCredential(user, credential);

  // Firebase sends a verification email before applying the new address.
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

  // Reauthentication proves the user knows their current password.
  await reauthenticateWithCredential(user, credential);

  return updatePassword(user, newPassword);
};
