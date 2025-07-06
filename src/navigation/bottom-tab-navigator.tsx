import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ESLintScreen } from "../screens/eslint-setup";
import { FunctionalProgrammingScreen } from "../screens/functional-prog";
import { HuskyScreen } from "../screens/husky-setup";
import { PrettierScreen } from "../screens/prettier-setup";
import { ProjectSetup } from "../screens/project-setup";
import { ReactBasicsScreen } from "../screens/react-basics";
import { UITreeScreen } from "../screens/uit";
import { HomeScreen } from "../screens/home";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Project Setup" component={ProjectSetup} />
      <Tab.Screen name="ESLint" component={ESLintScreen} />
      <Tab.Screen name="Prettier" component={PrettierScreen} />
      <Tab.Screen name="Husky" component={HuskyScreen} />
      <Tab.Screen name="React Basics" component={ReactBasicsScreen} />
      <Tab.Screen
        name="Functional Programming"
        component={FunctionalProgrammingScreen}
      />
      <Tab.Screen name="UI Tree" component={UITreeScreen} />
    </Tab.Navigator>
  );
};
