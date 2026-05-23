import { StyleSheet } from "react-native";

export const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 16,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  label: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 8,
  },

  email: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
  },

  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
  },

  formContainer: {
    marginBottom: 12,
  },

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

  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  errorText: {
    color: "#ff6b6b",
    marginBottom: 8,
  },
});
