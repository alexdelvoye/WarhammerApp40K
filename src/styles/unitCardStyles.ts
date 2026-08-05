import { StyleSheet } from "react-native";

// Shared card styles for unit rows in the detail screen and selection modal.
export const UnitCardStyles = StyleSheet.create({
  // Row layout places stats on the left and an action button on the right.
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333",
    flexDirection: "row",
    alignItems: "center",
  },

  // Text container expands to use remaining card width.
  container: {
    flex: 1,
  },

  // Unit name is the primary label.
  name: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },

  // Compact stat line mirrors common tabletop shorthand.
  stats: {
    color: "#B0B0B0",
    fontSize: 13,
    marginBottom: 4,
  },

  // Points are bold because they affect the army total.
  points: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Circular action button supports plus and minus text.
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  // Line height keeps plus/minus centered inside the circular button.
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 26,
  },
});
