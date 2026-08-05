import { StyleSheet } from "react-native";

// Full-width action button shown below the selected-unit list.
export const AddUnitButtonStyles = StyleSheet.create({
  // Padding and radius match the other form/profile buttons.
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  // Bold text makes this screen-level action easy to scan.
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
