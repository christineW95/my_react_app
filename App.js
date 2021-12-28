

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Home from './app/screens/Home';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={isDarkMode ? styles.container : {}}>
      <Home />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});

export default App;
