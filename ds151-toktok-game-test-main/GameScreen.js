import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameScreen = ({ onEnd, onReturn }) => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [ballSpeed, setBallSpeed] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setScore((prevScore) => prevScore + 1);
    setButtonPosition({
      x: Math.random() * (containerWidth - 50),
      y: Math.random() * (containerHeight - 50),
    });
    setBallSpeed((prevSpeed) => prevSpeed * 1.1);
  };
  
  const handleReturn = () => {
    onReturn();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setButtonPosition({
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 50),
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [buttonPosition, ballSpeed]);

  useEffect(() => {
    if (time === 0) {
      onEnd(score);
    }
  }, [time]);

  const handleContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerWidth(width);
    setContainerHeight(height);
  };



  return (
    <View style={styles.container} onLayout={handleContainerLayout}>
      <TouchableOpacity style={styles.returnButton} onPress={handleReturn}>
        <Text style={styles.returnButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.timer}>{time}s</Text>
      <Text style={styles.score}>Pontuação: {score}</Text> {/* Exibição da pontuação */}
      <TouchableOpacity
        onPress={handleClick}
        style={[styles.ball, { top: buttonPosition.y, left: buttonPosition.x }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  returnButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  returnButtonText: {
    fontSize: 20,
  },
  timer: {
    fontSize: 30,
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default GameScreen;
