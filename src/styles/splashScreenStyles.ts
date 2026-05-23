import { StyleSheet } from "react-native";

export const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 24,
  },

  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 22,
    marginTop: 8,
  },
});
