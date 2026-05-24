import { StyleSheet } from "react-native";

export const ArmyCompositionCardStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 10,
  },

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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  armyName: {
    color: "#B0B0B0",
    fontSize: 15,
    marginBottom: 2,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 2,
  },

  pointsContainer: {
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },

  pointsText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },

  pointsTextError: {
    color: "#ff6b6b",
  },

  imageBackground: {
    flex: 1,
  },

  image: {
    borderRadius: 10,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 10,
  },
});
