import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = ({ name, score, onRestart, onExit }) => {
  const handleExit = () => {
    onExit();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fim de jogo!</Text>
      <Text style={styles.text}>{name}, sua pontuação foi:</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Jogar Novamente" onPress={onRestart} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Encerrar" onPress={handleExit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff5f5f',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default GameOverScreen;
