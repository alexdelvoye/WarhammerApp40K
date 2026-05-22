import { StyleSheet } from "react-native";

export const SelectUnitModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  closeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },

  pointsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },

  pointsTextError: {
    color: "#ff6b6b",
  },
});
