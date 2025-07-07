import { StyleSheet } from "react-native";

import { padding, cornerRadius, fontSize } from "../../styles/theme";

export const style = StyleSheet.create({
  container: {
    padding: padding.m,
    borderRadius: cornerRadius.l,
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
});
