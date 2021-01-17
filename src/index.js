import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations';
import { StatusBar } from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};



export default App;
