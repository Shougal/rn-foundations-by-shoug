import { Text } from "react-native";

import { NoteProps } from "./type";
import { getVariantStyle } from "./style";

export const Note = ({ variant, content }: NoteProps) => {
  return <Text style={getVariantStyle(variant)}>{content}</Text>;
};
