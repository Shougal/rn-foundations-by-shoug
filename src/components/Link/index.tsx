import { Pressable, Text } from "react-native";

import { LinkProps } from "./type";
import { style } from "./style";

export const Link = (props: LinkProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={style.default}>{props.linkLabel}</Text>
    </Pressable>
  );
};
