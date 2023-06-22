import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesProvider } from './src/context/NotesContext';
import AddNoteScreen from './src/screens/AddNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddNote" component={AddNoteScreen} />
          <Stack.Screen name="EditNote" component={EditNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}
