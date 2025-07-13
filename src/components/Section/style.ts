import { StyleSheet } from "react-native";

import { padding, cornerRadius, fontSize } from "../../styles/theme";

export const style = StyleSheet.create({
  header: {
    borderRadius: cornerRadius.m,
  },

  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSize.m,
    color: "#FFFFFF",
    //TODO: font family
    marginBottom: 8,
  },

  contentWrapper: {
    padding: padding.m,
    backgroundColor: "#FFFFFF",
    borderRadius: cornerRadius.m,
  },
});
