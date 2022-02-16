import React from 'react';
import ThemeProvider from './app/theme/index';
import HomeStackNavigator from './app/navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/navigation/bottomNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
