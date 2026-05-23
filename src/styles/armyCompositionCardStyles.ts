import { StyleSheet } from "react-native";

export const ArmyCompositionCardStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 20,
    paddingRight: 64,
    borderWidth: 1,
    borderColor: "#333",
  },

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

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 16,
    marginBottom: 4,
  },

  pointsContainer: {
    marginTop: 16,
    backgroundColor: "#F5F5F5",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  pointsText: {
    color: "black",
    fontWeight: "bold",
  },
});
