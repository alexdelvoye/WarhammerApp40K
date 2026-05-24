import { StyleSheet } from "react-native";

export const CreateArmyCompositionScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  formContainer: {
    flex: 1,
  },

  formContent: {
    flex: 1,
  },

  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 6,
    marginTop: 0,
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
  },

  armyList: {
    flex: 1,
  },

  armyListContent: {
    paddingBottom: 8,
  },

  armyButton: {
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#333",
  },

  armyText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  armyRule: {
    color: "#B0B0B0",
    marginTop: 4,
    fontSize: 13,
  },

  createButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 12,
    alignItems: "center",
  },

  createButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  errorText: {
    color: "#ff6b6b",
    marginTop: 4,
    minHeight: 14,
    fontSize: 12,
  },
});
