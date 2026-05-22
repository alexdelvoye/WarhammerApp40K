import { StyleSheet } from "react-native";

export const ArmyCompositionScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  summaryCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#333",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 18,
    marginBottom: 4,
  },

  rule: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 16,
  },

  pointsBox: {
    backgroundColor: "#D9D9D9",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  pointsText: {
    color: "black",
    fontWeight: "bold",
  },

  sectionTitle: {
    color: "white",
    fontSize: 24,
    marginTop: 24,
    marginBottom: 12,
  },

  emptyCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 18,
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
