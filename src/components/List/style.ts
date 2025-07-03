import { StyleSheet } from "react-native";

import { fontSize, padding } from "../../styles/theme";

export const style = StyleSheet.create({
  items: {
    flexShrink: 1, // Allows it to shrink if needed
    flexWrap: "wrap", // Ensures text wraps to the next line
    fontSize: fontSize.sm,
    paddingHorizontal: padding.m,
  },
});
