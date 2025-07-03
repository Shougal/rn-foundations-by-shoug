import { StyleSheet } from "react-native";

import { padding, cornerRadius, fontSize } from "../../styles/theme";

export const style = StyleSheet.create({
  container: {
    padding: padding.m,
    backgroundColor: "#f0f0f0",
    borderRadius: cornerRadius.m,
    flexShrink: 1,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSize.m,
    color: "blue",
    //TODO: font family
    marginBottom: 8,
  },
});
