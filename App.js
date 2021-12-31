import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Routes from '~Routes';
import s from '~static/style';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={[s.container]}>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
