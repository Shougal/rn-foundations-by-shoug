import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ESLintScreen } from "../screens/eslint-setup";
import { FunctionalProgrammingScreen } from "../screens/functional-prog";
import { HuskyScreen } from "../screens/husky-setup";
import { PrettierScreen } from "../screens/prettier-setup";
import { ProjectSetup } from "../screens/project-setup";
import { ReactBasicsScreen } from "../screens/react-basics";
import { UITreeScreen } from "../screens/uit";
import { HomeScreen } from "../screens/home";
import { EventHandlersScreen } from "../screens/event-handler";
import { StateAndMemoryScreen } from "../screens/state-memory";
import { StateIsolationScreen } from "../screens/state-isolation";
import { StateAsSnapshotScreen } from "../screens/state-snapshot";
import { UseEffectScreen } from "../screens/use-effect";
const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#DBDAEE",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
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
      <Tab.Screen name="Event Handlers" component={EventHandlersScreen} />
      <Tab.Screen name="State and Memory" component={StateAndMemoryScreen} />
      <Tab.Screen name="State Isolation" component={StateIsolationScreen} />
      <Tab.Screen
        name="State as a SnapShot"
        component={StateAsSnapshotScreen}
      />
      <Tab.Screen name="Use Effects" component={UseEffectScreen} />
    </Tab.Navigator>
  );
};
