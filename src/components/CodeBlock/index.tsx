import { Text, View } from "react-native";

import { CodeProps } from "./type";
import { style } from "./style";

export const CodeBlock = ({ code }: CodeProps) => {
  return (
    <View style={style.container}>
      <Text style={style.code}>{code}</Text>
    </View>
  );
};
