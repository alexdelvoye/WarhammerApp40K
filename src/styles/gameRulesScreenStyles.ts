import { StyleSheet } from "react-native";

export const GameRulesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 14,
  },

  cardTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    color: "#B0B0B0",
    fontSize: 16,
    lineHeight: 22,
  },
});
