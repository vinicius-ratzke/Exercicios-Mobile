import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';
import NotesListScreen from '../screens/NoteListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Minhas Anotações' }} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Nova Anotação' }} />
      <Stack.Screen name="EditNote" component={EditNoteScreen} options={{ title: 'Editar Anotação' }} />
      <Stack.Screen name="NotesList" component={NotesListScreen} options={{ title: 'Minhas Anotações' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
