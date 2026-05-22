import { StyleSheet } from "react-native";

export const UnitCardStyles = StyleSheet.create({
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

  container: {
    flex: 1,
  },

  name: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },

  stats: {
    color: "#B0B0B0",
    fontSize: 13,
    marginBottom: 4,
  },

  points: {
    color: "#D9D9D9",
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 26,
  },
});
