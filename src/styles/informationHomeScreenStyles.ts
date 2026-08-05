import { StyleSheet } from "react-native";

// Styles for the Information menu screen.
export const InformationHomeScreenStyles = StyleSheet.create({
  // Background image covers the whole page.
  background: {
    flex: 1,
  },

  // Transparent screen body with consistent page padding.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  // Page title above the navigation cards.
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Gap creates even spacing between information links.
  cardContainer: {
    gap: 10,
  },

  // Pressable information destination card.
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  // Card label for each information destination.
  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
