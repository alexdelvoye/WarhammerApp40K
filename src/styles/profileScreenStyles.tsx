import { StyleSheet } from "react-native";

export const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  label: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 8,
  },

  email: {
    color: "white",
    fontSize: 18,
    marginBottom: 24,
  },

  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 20,
  },

  formContainer: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
    marginBottom: 8,
  },

  button: {
    backgroundColor: "#D9D9D9",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },

  errorText: {
    color: "#ff6b6b",
    marginBottom: 8,
    minHeight: 18,
  },
});
