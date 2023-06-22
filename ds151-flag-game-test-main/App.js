import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import GameScreenTime from './src/screens/GameScreenTime';
import Scoreboard from './src/screens/Scoreboard';

import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, title: 'Jogo das Bandeiras'}}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown: false}}/>
        <Stack.Screen name="GameTime" component={GameScreenTime} options={{headerShown: false}}/>
        <Stack.Screen name="Scoreboard" component={Scoreboard} options={{headerShown: false}}/>
        
        


      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
