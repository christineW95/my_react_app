import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Home from './app';
import ThemeProvider from './app/theme/index';

const App = () => {

  return (
    <ThemeProvider>
      <Text>Fucking Hello</Text>
      <Home />
    </ThemeProvider>
  );
};



export default App;
