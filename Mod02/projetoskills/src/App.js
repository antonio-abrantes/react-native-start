import React from 'react';
import { StatusBar } from 'react-native';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
