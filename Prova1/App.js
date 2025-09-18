import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ImageInternetScreen from "./src/screens/ImageInternetScreen";
import ImageLocalScreen from "./src/screens/ImageLocalScreen";
import IconsScreen from "./src/screens/IconsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Internet" component={ImageInternetScreen} />
        <Stack.Screen name="Local" component={ImageLocalScreen} />
        <Stack.Screen name="Icons" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
