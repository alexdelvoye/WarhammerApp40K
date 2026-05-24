import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: "transparent",
  },

  container: {
    width: "100%",
    height: 90,
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

  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 12,
    resizeMode: "contain",
  },

  title: {
    flex: 1,
    color: "white",
    fontSize: 30,
    fontFamily: "MedievalSharp",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  placeholder: {
    width: 40,
  },
});
