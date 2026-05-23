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
