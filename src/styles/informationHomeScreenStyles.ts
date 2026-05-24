import { StyleSheet } from "react-native";

export const InformationHomeScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  cardContainer: {
    gap: 10,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
