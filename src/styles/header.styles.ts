import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
  },
  
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
