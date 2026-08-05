import { StyleSheet } from "react-native";

// Shared sign-out button styling for the profile screen.
export const LogoutButtonStyles = StyleSheet.create({
  // Button uses the same shape and spacing as other profile actions.
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  // Bold label makes the account action easy to recognize.
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
