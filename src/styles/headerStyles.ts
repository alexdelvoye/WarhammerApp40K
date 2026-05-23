import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#111",
  },

  container: {
    width: "100%",
  },

  header: {
    height: 90,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  navigationButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  navigationText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 12,
    resizeMode: "contain",
  },

  title: {
    flex: 1,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  placeholder: {
    width: 40,
  },
});
