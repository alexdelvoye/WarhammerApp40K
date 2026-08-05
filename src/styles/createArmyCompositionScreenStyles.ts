import { StyleSheet } from "react-native";

// Styles for creating a new named army composition.
export const CreateArmyCompositionScreenStyles = StyleSheet.create({
  // Background image covers the whole create screen.
  background: {
    flex: 1,
  },

  // Allows the form to move when the keyboard opens.
  keyboardAvoidingView: {
    flex: 1,
  },

  // Transparent screen content layer with consistent spacing.
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Form wrapper fills the screen so the create button can sit at the bottom.
  formContainer: {
    flex: 1,
  },

  // Inner form content owns the vertical layout.
  formContent: {
    flex: 1,
  },

  // Label above the composition name input.
  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 6,
    marginTop: 0,
  },

  // Name input style shared with theme overrides in the component.
  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 15,
  },

  // Army list fills the available space between input and submit button.
  armyList: {
    flex: 1,
  },

  // Keeps the last selectable army card clear of the create button.
  armyListContent: {
    paddingBottom: 8,
  },

  // Pressable faction row with clipped image corners.
  armyButton: {
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#333",
    overflow: "hidden",
  },

  // Fixed minimum height keeps every faction option easy to tap.
  armyImageBackground: {
    minHeight: 95,
  },

  // Image radius matches the enclosing pressable.
  armyImage: {
    borderRadius: 10,
  },

  // Overlay centers readable text on the faction image.
  armyOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    justifyContent: "center",
  },

  // Faction name in the selectable army list.
  armyText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  // Rule summary displayed under the faction name.
  armyRule: {
    color: "#D9D9D9",
    marginTop: 4,
    fontSize: 13,
  },

  // Submit button fixed at the bottom of the form flow.
  createButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 12,
    alignItems: "center",
  },

  // Submit button label.
  createButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Reserved height avoids layout jumping when validation errors appear.
  errorText: {
    color: "#ff6b6b",
    marginTop: 4,
    minHeight: 14,
    fontSize: 12,
  },
});
