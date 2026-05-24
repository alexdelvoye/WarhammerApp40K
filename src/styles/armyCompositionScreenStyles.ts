import { StyleSheet } from "react-native";

export const ArmyCompositionScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  summaryCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 15,
    marginBottom: 2,
  },

  rule: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 10,
  },

  pointsBox: {
    backgroundColor: "#D9D9D9",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },

  pointsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },

  sectionTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 8,
  },

  unitList: {
    flex: 1,
  },

  unitListContent: {
    paddingBottom: 8,
  },

  addButtonContainer: {
    paddingTop: 8,
    paddingBottom: 12,
  },

  emptyCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  emptyText: {
    color: "#B0B0B0",
    fontSize: 16,
  },

  pointsTextError: {
    color: "#ff6b6b",
  },
});
