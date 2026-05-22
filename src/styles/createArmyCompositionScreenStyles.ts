import { StyleSheet } from "react-native";

export const CreateArmyCompositionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  formContainer: {
    flex: 1,
  },

  formContent: {
    flex: 1,
  },

  label: {
    color: "white",
    fontSize: 22,
    marginBottom: 8,
    marginTop: 0,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
  },

  armyList: {
    flex: 1,
  },

  armyButton: {
    backgroundColor: "#1E1E1E",
    padding: 18,
    borderRadius: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  selectedArmyButton: {
    borderColor: "#FFFFFF",
  },

  armyText: {
    color: "white",
    fontSize: 20,
  },

  armyRule: {
    color: "#B0B0B0",
    marginTop: 6,
    fontSize: 15,
  },

  createButton: {
    backgroundColor: "#D9D9D9",
    padding: 18,
    borderRadius: 14,
    marginTop: 12,
    marginBottom: 20,
    alignItems: "center",
  },

  createButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  errorText: {
    color: "#ff6b6b",
    marginTop: 4,
    minHeight: 16,
  },
});
