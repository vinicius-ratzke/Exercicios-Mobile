import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  const handleStart = (playerName) => {
    setName(playerName);
    setScreen('game');
  };

  const handleEnd = (gameScore) => {
    setScore(gameScore);
    setScreen('gameOver');
  };

  const handleRestart = () => {
    setScore(0);
    setScreen('game');
  };

  const handleExit = () => {
    setScreen('welcome');
  };

  let content;

  if (screen === 'welcome') {
    content = <WelcomeScreen onStart={handleStart} />;
  } else if (screen === 'game') {
    content = <GameScreen onEnd={handleEnd} onReturn={handleExit} />;
  } else if (screen === 'gameOver') {
    content = <GameOverScreen name={name} score={score} onRestart={handleRestart} onExit={handleExit} />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
