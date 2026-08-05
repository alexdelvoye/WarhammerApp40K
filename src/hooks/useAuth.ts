import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

// Small wrapper keeps components from importing AuthContext directly.
export const useAuth = () => {
  // React context provides the current Firebase user and loading state.
  return useContext(AuthContext);
};
