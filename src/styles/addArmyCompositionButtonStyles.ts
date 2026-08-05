import { StyleSheet } from "react-native";

// Floating action button used on HomeScreen to create a new army list.
export const AddArmyCompositionButtonStyles = StyleSheet.create({
  // Absolute positioning keeps the button anchored above the bottom-right edge.
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

  // Large plus sign makes the primary create action visible at a glance.
  plusText: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    lineHeight: 46,
  },
});
