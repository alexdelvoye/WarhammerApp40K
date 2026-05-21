import { StyleSheet } from "react-native";

export const SelectArmyScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
    marginTop: 16,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#333",
  },

  armyButton: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  selectedArmyButton: {
    borderColor: "#FFFFFF",
  },

  armyText: {
    color: "white",
    fontSize: 18,
  },

  armyRule: {
    color: "#B0B0B0",
    marginTop: 4,
  },

  createButton: {
    backgroundColor: "#D9D9D9",
    padding: 18,
    borderRadius: 12,
    marginTop: 32,
    alignItems: "center",
  },

  createButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  errorText: {
    color: "#ff6b6b",
    marginTop: 6,
  },
});
