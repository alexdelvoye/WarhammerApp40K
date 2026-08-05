import { useFonts } from "expo-font";

// Loads bundled fonts before the main navigation is displayed.
export function useLoadFonts() {
  // The key here becomes the fontFamily value used by the header styles.
  return useFonts({
    MedievalSharp: require("../assets/fonts/MedievalSharp-Regular.ttf"),
  });
}
