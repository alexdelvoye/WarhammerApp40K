import { StyleSheet } from "react-native";

// Styles for the full-screen modal used to add units to a composition.
export const SelectUnitModalStyles = StyleSheet.create({
  // Modal owns its own page background because it renders above the current screen.
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  // Close action sits at the top of the modal.
  closeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Current point total shown before the unit list.
  pointsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // Warning color for point totals above the provided max.
  pointsTextError: {
    color: "#ff6b6b",
  },
});
