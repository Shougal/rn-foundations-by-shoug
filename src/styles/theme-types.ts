import {
  cornerRadius,
  fontFamily,
  fontSize,
  gap,
  lineHeight,
  padding,
} from "./theme";

export type CornerRadius = keyof typeof cornerRadius;
export type Gap = keyof typeof gap;
export type Padding = keyof typeof padding;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type FontFamily = keyof typeof fontFamily;
