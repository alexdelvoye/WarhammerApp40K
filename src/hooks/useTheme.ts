import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

// Small wrapper keeps theme consumers independent from the context import path.
export const useTheme = () => {
  // Provides the active theme and the toggle action from ThemeProvider.
  return useContext(ThemeContext);
};
