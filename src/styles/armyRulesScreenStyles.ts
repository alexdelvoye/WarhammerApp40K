import { StyleSheet } from "react-native";

export const ArmyRulesScreenStyles = StyleSheet.create({
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

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },

  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  ruleLabel: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },

  cardText: {
    color: "#B0B0B0",
    fontSize: 14,
    lineHeight: 20,
  },
});
