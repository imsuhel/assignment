import {View, Text} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import Styles from '../utils/Styles';

const Button = ({label, action, styles}) => {
  return (
    <Ripple
      onPress={() => action()}
      rippleColor="#fff"
      style={{overflow: 'hidden', borderRadius: 50}}>
      <Text style={[Styles.buttonStyle, styles]}>{label}</Text>
    </Ripple>
  );
};

export default Button;
