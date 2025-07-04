import { StyleSheet } from "react-native";

import { VariantType } from "./type";
import { fontSize } from "../../styles/theme";

const style = StyleSheet.create({
  info: {
    flexShrink: 1, // Allows it to shrink if needed
    flexWrap: "wrap", // Ensures text wraps to the next line
    fontSize: fontSize.sm,
  },
  warning: {
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: fontSize.sm,
    color: "#d97706", // amber tone for warning
  },
  success: {
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: fontSize.sm,
    color: "#15803d", // green tone for success
  },
});

export const getVariantStyle = (variant: VariantType) => {
  switch (variant) {
    case "info":
      return style.info;
    case "warning":
      return style.warning;
    case "success":
      return style.success;
    default:
      return style.info;
  }
};
