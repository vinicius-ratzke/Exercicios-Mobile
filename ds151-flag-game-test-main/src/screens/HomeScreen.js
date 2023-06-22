import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo</Text>
      <View style={styles.container_name}>
        <Text style={styles.labelName}>Digite seu nome</Text>
        <TextInput 
          style={styles.textInput}
          value={username}
          onChangeText={(t) => setUsername(t)}
        />
        <Button 
          title="Iniciar jogo normal"
          color="#0a0"
          width={200}
          disabled={username === ''}
          onPress={ () => {
            navigation.navigate("Game", {
              username: username
            })
          }}
        />
        <Button 
          title="Iniciar jogo por tempo"
          color="#0a0"
          width={200}
          disabled={username === ''}
          onPress={ () => {
            navigation.navigate("GameTime", {
              username: username
            })
          }}
        />
        <Button 
          title="Quadro de Pontuação"
          color="#0000FF"
          width={200}
          onPress={ () => {
            navigation.navigate("Scoreboard", {
              
            })
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 50,
    color: '#004',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  container_name: {
    justifyContent: 'center',
  },
  labelName: {
    fontSize: 30,
    fontFamily: 'monospace',
  },
  textInput: {
    borderWidth: 2,
    margin: 20,
    borderColor: '#008',
    borderRadius: 20,
    padding: 20,
    fontSize: 20,
    fontFamily: 'monospace'
  },
});

export default HomeScreen;
