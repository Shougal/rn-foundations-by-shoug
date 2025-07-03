import { View, Text } from "react-native";

import { SectionProps } from "./type";
import { style } from "./style";

export const Section = ({ title, children }: SectionProps) => {
  return (
    <View style={style.container}>
      <Text style={style.header}>{title}</Text>
      {children}
    </View>
  );
};
