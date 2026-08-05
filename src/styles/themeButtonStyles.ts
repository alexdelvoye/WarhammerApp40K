import { StyleSheet } from "react-native";

// Button used on ProfileScreen to toggle between light and dark themes.
export const ThemeButtonStyles = StyleSheet.create({
  // Shape and spacing match the other profile action buttons.
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  // Bold text makes the theme action stand out.
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
