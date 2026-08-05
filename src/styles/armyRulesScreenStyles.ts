import { StyleSheet } from "react-native";

// Styles for the static army rules information screen.
export const ArmyRulesScreenStyles = StyleSheet.create({
  // Shared background image fills the screen.
  background: {
    flex: 1,
  },

  // Transparent content area keeps background artwork visible.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  // Main page title.
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Each rule entry is displayed as a compact card.
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },

  // Army/faction name inside a rule card.
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // Small label that introduces the rule name.
  ruleLabel: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },

  // Body text for rule explanations.
  cardText: {
    color: "#B0B0B0",
    fontSize: 14,
    lineHeight: 20,
  },
});
