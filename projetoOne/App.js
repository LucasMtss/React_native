/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

  return (
    <ScrollView>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Titulo do post</Text>
        <Text style={styles.postDescription}>Descrição do post</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Titulo: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    padding: 10,
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 2,
  },
  postTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 3,
  },
});

export default App;
