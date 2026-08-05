import { StyleSheet } from "react-native";

// Styles for the saved army-composition overview screen.
export const HomeScreenStyles = StyleSheet.create({
  // Shared background image stretches behind the whole screen.
  background: {
    flex: 1,
  },

  // Main layout stays transparent over the background image.
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

  // Section heading above the user's saved lists.
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },

  // FlatList padding keeps cards away from screen edges.
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
