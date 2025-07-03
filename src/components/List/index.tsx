import { FlatList, Text } from "react-native";

import { ListProps } from "./type";
import { style } from "./style";

export const List = ({ variant, items }: ListProps) => {
  //P.S Avoid having key as index. Using the index as the key
  // can cause bugs in React's rendering when the list: Changes order ,
  // Adds or removes items, Has duplicate or unstable content
  // I chose to do it because this list usage is short and static.
  // It’s just rendering bullet points (not interactive items).
  return (
    <FlatList
      style={style.items}
      data={items}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item, index }) => (
        <Text>
          {variant === "ordered" ? `${index + 1}. ` : "\u2022 "}
          {item}
        </Text>
      )}
    />
  );
};
