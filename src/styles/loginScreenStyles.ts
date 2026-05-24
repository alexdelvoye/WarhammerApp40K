import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },

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

  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  errorText: {
    color: "#ff6b6b",
    marginTop: 6,
    minHeight: 18,
  },

  registerText: {
    color: "#D9D9D9",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
  },
});
