import { StyleSheet } from "react-native";

export const RegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 24,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
  },

  button: {
    backgroundColor: "#D9D9D9",
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },

  errorText: {
    color: "#ff6b6b",
    marginTop: 6,
    minHeight: 18,
  },
});
