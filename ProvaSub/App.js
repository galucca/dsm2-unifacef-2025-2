import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import DiaScreen from "./src/screens/DiaScreen";
import SemanaScreen from "./src/screens/SemanaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Inicio" component={HomeScreen} />
    
    <Stack.Screen 
      name="Dia" 
      component={DiaScreen} 
      options={{ title: "Compromissos do dia" }}
    />

    <Stack.Screen 
      name="Semana" 
      component={SemanaScreen} 
      options={{ title: "Compromissos da semana" }}
    />
  </Stack.Navigator>
</NavigationContainer>

  );
}

