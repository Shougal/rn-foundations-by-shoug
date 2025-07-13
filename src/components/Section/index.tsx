import { View, Text } from "react-native";

import { SectionProps } from "./type";
import { style } from "./style";

export const Section = ({
  title,
  color = "#265273",
  children,
}: SectionProps) => {
  return (
    <View>
      <View style={[style.header, { backgroundColor: color }]}>
        <Text style={style.headerText}>{title}</Text>
      </View>
      <View style={style.contentWrapper}>{children}</View>
    </View>
  );
};
