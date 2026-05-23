import { useFonts } from "expo-font";

export function useLoadFonts() {
  return useFonts({
    MedievalSharp: require("../assets/fonts/MedievalSharp-Regular.ttf"),
  });
}
