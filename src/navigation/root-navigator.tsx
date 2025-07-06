import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./bottom-tab-navigator";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
