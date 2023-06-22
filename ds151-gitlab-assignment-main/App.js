import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ListItem, Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const logout = async () => {
    // Limpa o token de acesso e redireciona para a tela de login
    await AsyncStorage.removeItem('accessToken');
    props.navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <ListItem bottomDivider onPress={logout}>
        <Avatar source={{ uri: 'https://via.placeholder.com/150' }} rounded />
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </DrawerContentScrollView>
  );
};

const HomeScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtém o token de acesso persistido
    AsyncStorage.getItem('accessToken')
      .then((token) => {
        if (token) {
          // Faz uma requisição para obter os dados do usuário logado
          axios.get('https://gitlab.com/api/v4/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              setUser(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.name}!</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const authenticate = () => {
    // Realiza a autenticação na API do GitLab
    // Substitua 'seu_token_de_acesso_aqui' pelo seu token de acesso pessoal
    const accessToken = 'glpat-H__dkzqdhwYEEN13bxf1';
  
    // Persiste o token de acesso
    AsyncStorage.setItem('accessToken', accessToken)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={authenticate} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
