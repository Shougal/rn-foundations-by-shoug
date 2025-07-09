import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { SectionProps } from "./type";
import { style } from "./style";

export const Section = ({ title, children }: SectionProps) => {
  return (
    <LinearGradient
      colors={["#B6B4E8", "#666582"]}
      locations={[0.42, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={style.gradientContainer}
    >
      <View style={style.container}>
        <Text style={style.header}>{title}</Text>
        {children}
      </View>
    </LinearGradient>
  );
};
