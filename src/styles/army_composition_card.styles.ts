import { StyleSheet } from "react-native";

export const ArmyCompositionCardStyles = StyleSheet.create({
  card: {
    height: 170,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2a2a2a",
    elevation: 5, // Android shadow
  },

  cardImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  cardImageStyle: {
    borderRadius: 20,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 16,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },

  cardSubtitle: {
    color: "#d1d1d1",
    fontSize: 15,
    marginTop: 2,
  },

  cardText: {
    color: "#b5b5b5",
    fontSize: 13,
    marginTop: 6,
    marginBottom: 10,
  },

  pointsBadge: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  pointsText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "700",
  },
});
