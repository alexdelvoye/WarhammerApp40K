import { StyleSheet } from "react-native";

export const addArmyCompositionButtonStyles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 46,
  },
});
