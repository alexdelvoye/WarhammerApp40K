import { StyleSheet } from "react-native";

// Styles for the general game rules information screen.
export const GameRulesScreenStyles = StyleSheet.create({
  // Shared background image fills the screen.
  background: {
    flex: 1,
  },

  // Transparent content layer with standard page padding.
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

  // Rule cards group each section of information.
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
  },

  // Heading inside each information card.
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  // Body copy uses line height for readability on mobile.
  cardText: {
    color: "#B0B0B0",
    fontSize: 14,
    lineHeight: 20,
  },
});
