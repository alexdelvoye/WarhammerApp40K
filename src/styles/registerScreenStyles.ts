import { StyleSheet } from "react-native";

// Register screen and RegisterForm share this stylesheet.
export const RegisterScreenStyles = StyleSheet.create({
  // Background artwork fills the register screen.
  background: {
    flex: 1,
  },

  // Keeps registration inputs visible above the keyboard.
  keyboardAvoidingView: {
    flex: 1,
  },

  // Centers the registration form vertically.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
    justifyContent: "center",
  },

  // Register page heading.
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },

  // Form input styling with theme overrides added by the component.
  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
  },

  // Main submit button.
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
  },

  // Submit button label.
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Reserved height prevents layout jumping when validation errors appear.
  errorText: {
    color: "#ff6b6b",
    marginTop: 6,
    minHeight: 18,
  },

  // Link back to the login screen.
  loginText: {
    color: "#D9D9D9",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
  },
});
