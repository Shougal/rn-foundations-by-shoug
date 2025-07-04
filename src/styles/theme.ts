import { Platform } from "react-native";
import { StyleSheet } from "react-native";

export const cornerRadius = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
} as const;

export const gap = {
  "2xs": 4,
  xs: 8,
  s: 16,
  m: 32,
} as const;

export const padding = {
  "2xs": 4,
  xs: 8,
  m: 16,
  l: 32,
} as const;

export const fontSize = {
  xs: 8,
  sm: 16,
  m: 32,
} as const;

export const lineHeight = {
  default: 1.4,
} as const;

export const fontFamily = {
  default: Platform.select({
    ios: "Inconsolata-Regular",
    android: "InconsolataRegular",
  }),
} as const;

export const pageStyle = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionStack: {
    display: "flex",
    flexDirection: "column",
    gap: 16, // space between sections
  },
});
