import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  function handleNavigateToTaskList() {
    navigation.navigate('TaskList');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Vai para Todolist" onPress={handleNavigateToTaskList} />
    </View>
  );
}

export default HomeScreen;
