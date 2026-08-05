import { StyleSheet } from "react-native";

// Styles for the profile, theme, and account-management screen.
export const ProfileScreenStyles = StyleSheet.create({
  // Shared image background fills the whole profile screen.
  background: {
    flex: 1,
  },

  // Prevents keyboard from covering email/password forms.
  keyboardAvoidingView: {
    flex: 1,
  },

  // Transparent scrollable content area.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  // Page title.
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Small label for account and theme values.
  label: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 4,
  },

  // Current email and theme value text.
  email: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
  },

  // Heading for each profile form section.
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 10,
  },

  // Adds breathing room between separate account forms.
  formContainer: {
    marginBottom: 12,
  },

  // Shared profile input styling, with theme colors applied in components.
  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 15,
    marginBottom: 8,
  },

  // Shared action button used by account forms.
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },

  // Shared profile button label.
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Also used for short success/failure update messages.
  errorText: {
    color: "#ff6b6b",
    marginBottom: 8,
  },
});
