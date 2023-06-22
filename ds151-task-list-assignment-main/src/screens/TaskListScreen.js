import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function TaskListScreen() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask('');
  }

  function handleToggleCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa"
        placeholderTextColor="gray"
        value={newTask}
        onChangeText={text => setNewTask(text)}
        onSubmitEditing={handleAddTask}
        clearButtonMode="always"
      />
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleToggleCompletion(index)}
          style={{
            ...styles.taskContainer,
            backgroundColor: task.completed ? 'gray' : 'yellow',
          }}
        >
          <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>{task.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default TaskListScreen;
