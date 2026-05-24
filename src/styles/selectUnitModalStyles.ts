import { StyleSheet } from "react-native";

export const SelectUnitModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  closeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },

  pointsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  pointsTextError: {
    color: "#ff6b6b",
  },
});
