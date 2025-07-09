import { StyleSheet } from "react-native";

import { padding, cornerRadius, fontSize } from "../../styles/theme";

export const style = StyleSheet.create({
  container: {
    padding: padding.m,
    flexShrink: 1,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSize.m,
    color: "#343434",
    //TODO: font family
    marginBottom: 8,
  },
  // currently gradient container for sections
  gradientContainer: {
    borderRadius: cornerRadius.m,
  },
});
