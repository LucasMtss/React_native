import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Header from './src/components/Header';
import SubHeader from './src/components/SubHeader';
import ProductList from './src/components/ProductList';
import TabBar from './src/components/TabBar';

const App = () => {
  return (
    <View style={styles.fundo}>
      <Header />
      <ScrollView>
        <SubHeader />
        <ProductList />
      </ScrollView>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#f8f8fa',
    flex: 1,
  },
});

export default App;
