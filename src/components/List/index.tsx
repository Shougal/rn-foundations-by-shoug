import { Text, View } from "react-native";

import { ListProps } from "./type";
import { style } from "./style";

export const List = ({ variant, items, title }: ListProps) => {
  //P.S Avoid having key as index. Using the index as the key
  // can cause bugs in React's rendering when the list: Changes order ,
  // Adds or removes items, Has duplicate or unstable content
  // I chose to do it because this list usage is short and static.
  // It’s just rendering bullet points (not interactive items).
  return (
    <View style={style.container}>
      {title && <Text style={style.title}>{title}</Text>}
      {items.map((item, index) => (
        <View key={index} style={style.itemContainer}>
          <Text style={style.bullet}>
            {variant === "ordered" ? `${index + 1}.` : "\u2022"}
          </Text>
          <Text style={style.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
