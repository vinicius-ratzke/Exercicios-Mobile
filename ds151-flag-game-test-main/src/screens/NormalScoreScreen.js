import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const TimeScoreScreen = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await axios.get(
        'http://200.236.3.126:9999/scoreboards/20211627/scores'
      );
      const sortedScores = response.data.sort((a, b) => b.score - a.score);
      setScores(sortedScores);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {scores.map((score, index) => (
        <View key={index} style={styles.scoreContainer}>
          <Text
            style={[
              styles.position,
              index === 0 && styles.firstPlace,
              index === 1 && styles.secondPlace,
              index === 2 && styles.thirdPlace,
            ]}
          >
            {index + 1}.
          </Text>
          <Text
            style={[
              styles.name,
              index === 0 && styles.firstPlace,
              index === 1 && styles.secondPlace,
              index === 2 && styles.thirdPlace,
            ]}
          >
            {score.name}
          </Text>
          <Text
            style={[
              styles.score,
              index === 0 && styles.firstPlace,
              index === 1 && styles.secondPlace,
              index === 2 && styles.thirdPlace,
            ]}
          >
            {score.score} pontos
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  position: {
    fontSize: 35,
    marginRight: 8,
  },
  firstPlace: {
    color: 'yellow',
    fontWeight: 'bold',
  },
  secondPlace: {
    color: 'gray',
    fontWeight: 'bold',
  },
  thirdPlace: {
    color: 'brown',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 35,
    marginRight: 8,
  },
  score: {
    fontSize: 35, 
  },
});

export default TimeScoreScreen;