import { StyleSheet } from "react-native";

// Card styles for one saved army composition on the Home screen.
export const ArmyCompositionCardStyles = StyleSheet.create({
  // Relative positioning lets the delete icon sit over the card edge.
  container: {
    position: "relative",
    marginBottom: 10,
  },

  // Right padding reserves space for the delete button.
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 0,
    paddingRight: 60,
    borderWidth: 1,
    borderColor: "#333",
    overflow: "hidden",
    minHeight: 150,
  },

  // Delete button floats vertically centered on the card.
  deleteButton: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -22 }],
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  // Composition name is the strongest text on the image overlay.
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  // Faction name sits below the composition title.
  armyName: {
    color: "#B0B0B0",
    fontSize: 15,
    marginBottom: 2,
  },

  // Army rule gives quick context before opening the detail screen.
  subtitle: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 2,
  },

  // Points badge separates the total from descriptive text.
  pointsContainer: {
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },

  // Normal points text uses the themed button text color.
  pointsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },

  // Error color is applied when total points exceed 2000.
  pointsTextError: {
    color: "#ff6b6b",
  },

  // Image background fills the card behind the overlay.
  imageBackground: {
    flex: 1,
  },

  // Rounded image corners match the card border radius.
  image: {
    borderRadius: 10,
  },

  // Dark overlay keeps white text readable over faction artwork.
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 10,
  },
});
