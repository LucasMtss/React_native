/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import api from './services/api';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [projects, setProjects] = useState([]);

  async function getProjectList() {
    try {
      const response = await api.get('/projects');
      setProjects(response.data.projects);
    } catch (response) {
      setErrorMessage(response.data.error);
    }
  }

  async function signIn() {
    const response = await api.post('auth/authenticate', {
      email: 'lucas@gmail.com',
      password: '12345',
    });

    try {
      const {user, token} = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      Alert.alert('Login realizado com sucesso!');
      setLoggedInUser(user);
    } catch (response) {
      setErrorMessage(response.data.console.error);
    }
  }

  useEffect(async () => {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));
    if (token && user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      {!!errorMessage && <Text>{errorMessage}</Text>}
      {!!loggedInUser && <Text>{loggedInUser}</Text>}
      {loggedInUser ? (
        <Button onPress={getProjectList} title="Carregar projetos" />
      ) : (
        <Button onPress={signIn} title="Entrar" />
      )}

      {projects.map(project => (
        <View key={project._id}>
          <Text>{project.title}</Text>
          <Text>{project.sectionDescription}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
