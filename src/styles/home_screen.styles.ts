import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  screenTitle: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 20,
  },

  listContent: {
    paddingBottom: 40,
    gap: 16,
  },

  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  floatingButtonText: {
    fontSize: 30,
    color: "#000",
    fontWeight: "600",
  },
});
