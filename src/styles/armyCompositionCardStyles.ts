import { StyleSheet } from "react-native";

export const ArmyCompositionCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
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
