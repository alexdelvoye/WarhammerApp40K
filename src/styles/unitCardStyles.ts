import { StyleSheet } from "react-native";

export const UnitCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  stats: {
    color: "#B0B0B0",
    fontSize: 14,
    marginBottom: 6,
  },

  points: {
    color: "#D9D9D9",
    fontSize: 15,
    fontWeight: "bold",
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  buttonText: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 30,
  },
});
