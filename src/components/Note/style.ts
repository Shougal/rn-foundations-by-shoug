import { StyleSheet } from "react-native";

import { VariantType } from "./type";

const style = StyleSheet.create({
  info: {
    flexShrink: 1, // Allows it to shrink if needed
    flexWrap: "wrap", // Ensures text wraps to the next line
  },
});

export const getVariantStyle = (variant: VariantType) => {
  switch (variant) {
    case "info":
      return style.info;
  }
};
