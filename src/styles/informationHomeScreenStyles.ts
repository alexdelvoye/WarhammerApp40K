import { StyleSheet } from "react-native";

export const InformationHomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  cardContainer: {
    gap: 16,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 22,
    borderWidth: 1,
    borderColor: "#333",
  },

  cardText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
