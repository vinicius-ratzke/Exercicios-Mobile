import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    onStart(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 3,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderColor: 'black',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default WelcomeScreen;
