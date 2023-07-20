import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routes from './Routes';
import Styles from './src/utils/Styles';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
      <StatusBar backgroundColor={Styles.whiteColor} barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
