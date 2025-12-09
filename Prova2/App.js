import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AgendaDia from './src/screens/AgendaDia';
import MeusCompromissos from './src/screens/MeusCompromissos';
import CompromissosEquipe from './src/screens/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Agenda do Dia" component={AgendaDia} />
        <Stack.Screen name="Meus Compromissos" component={MeusCompromissos} />
        <Stack.Screen name="Equipe" component={CompromissosEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
