import React, { createContext, ReactNode, useEffect, useState } from "react";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

type AuthContextType = {
  currentUser: User | null;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  // loading starts as true because Firebase has not checked the saved login yet.
  loading: true,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase calls this listener whenever the user logs in, logs out, or reloads the app.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // The unsubscribe function prevents this listener from staying active forever.
    return unsubscribe;
  }, []);

  return (
    // Everything inside this provider can read currentUser through the useAuth hook.
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
