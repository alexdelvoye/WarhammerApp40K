import { StyleSheet } from "react-native";

// Shared custom header used by the stack navigators.
export const HeaderStyles = StyleSheet.create({
  // Safe area wrapper stays transparent so the image background can show through.
  safeArea: {
    backgroundColor: "transparent",
  },

  // Fixed header height keeps navigation layout stable across screens.
  container: {
    width: "100%",
    height: 90,
  },

  // Horizontal row holds navigation button, icon, title, and right placeholder.
  header: {
    height: 90,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  // Touch target for menu/back icon.
  navigationButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  // App icon displayed between the nav button and title.
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 12,
    resizeMode: "contain",
  },

  // MedievalSharp font gives the header its Battle Forge identity.
  title: {
    flex: 1,
    color: "white",
    fontSize: 30,
    fontFamily: "MedievalSharp",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  // Matches the left navigation button width to keep the title centered.
  placeholder: {
    width: 40,
  },
});
