import React, { createContext, ReactNode, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  // Default empty function is only used before the real provider is mounted.
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const loadTheme = async () => {
      // AsyncStorage works like small local storage on the phone.
      const savedTheme = await AsyncStorage.getItem("theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Update the UI immediately, then save the choice for the next app start.
    setTheme(newTheme);

    await AsyncStorage.setItem("theme", newTheme);
  };

  return (
    // Everything inside this provider can read and change the selected theme.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
