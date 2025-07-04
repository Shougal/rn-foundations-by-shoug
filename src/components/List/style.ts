import { StyleSheet } from "react-native";

import { fontSize, padding } from "../../styles/theme";

export const style = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: fontSize.sm,
    fontWeight: "600",
    marginBottom: 6,
    paddingHorizontal: padding.m,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: padding.m,
    marginBottom: 4,
  },
  bullet: {
    marginRight: 6,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * 1.5,
  },
  itemText: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * 1.5,
  },
});
