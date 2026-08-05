import { StyleSheet } from "react-native";

// Layout and visual styles for the army composition detail screen.
export const ArmyCompositionScreenStyles = StyleSheet.create({
  // Background image fills the full screen.
  background: {
    flex: 1,
  },

  // Transparent container lets the shared background artwork remain visible.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Summary card frames the selected faction artwork and composition metadata.
  summaryCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 10,
    overflow: "hidden",
  },

  // Image radius follows the outer summary card radius.
  summaryCardImage: {
    borderRadius: 10,
  },

  // Overlay improves contrast over busy faction images.
  summaryOverlay: {
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 12,
  },

  // Composition title shown in the summary card.
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  // Faction name text below the composition title.
  subtitle: {
    color: "#B0B0B0",
    fontSize: 15,
    marginBottom: 2,
  },

  // Army rule summary stays compact above the points badge.
  rule: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 10,
  },

  // Points badge uses a pill-like shape to stand apart from the image.
  pointsBox: {
    backgroundColor: "#D9D9D9",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },

  // Normal total-points text.
  pointsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },

  // Section label above the selected-unit list.
  sectionTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 8,
  },

  // Unit list takes remaining vertical space above the add button.
  unitList: {
    flex: 1,
  },

  // Bottom padding prevents the last unit card from touching the button area.
  unitListContent: {
    paddingBottom: 8,
  },

  // Fixed spacing around the add-unit button.
  addButtonContainer: {
    paddingTop: 8,
    paddingBottom: 12,
  },

  // Empty state uses the same card treatment as content cards.
  emptyCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  // Empty state text is muted so it does not compete with the title.
  emptyText: {
    color: "#B0B0B0",
    fontSize: 16,
  },

  // Red warning color for totals above the point limit.
  pointsTextError: {
    color: "#ff6b6b",
  },
});
