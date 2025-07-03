import { StyleSheet } from "react-native";

import { VariantType } from "./type";
import { fontSize } from "../../styles/theme";

const style = StyleSheet.create({
  info: {
    flexShrink: 1, // Allows it to shrink if needed
    flexWrap: "wrap", // Ensures text wraps to the next line
    fontSize: fontSize.sm,
  },
});

export const getVariantStyle = (variant: VariantType) => {
  switch (variant) {
    case "info":
      return style.info;
  }
};
