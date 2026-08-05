import { StyleSheet } from "react-native";

// Login screen and LoginForm share this stylesheet.
export const LoginScreenStyles = StyleSheet.create({
  // Background artwork fills the login screen.
  background: {
    flex: 1,
  },

  // Keeps inputs visible when the keyboard opens.
  keyboardAvoidingView: {
    flex: 1,
  },

  // Centers the login form vertically.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
    justifyContent: "center",
  },

  // Login page heading.
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },

  // Form text input with theme overrides applied by the component.
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

  // Reserved height prevents the form from shifting when errors appear.
  errorText: {
    color: "#ff6b6b",
    marginTop: 6,
    minHeight: 18,
  },

  // Link to the registration screen.
  registerText: {
    color: "#D9D9D9",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
  },
});
