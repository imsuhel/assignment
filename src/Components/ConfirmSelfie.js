import {View, Text, Image} from 'react-native';
import React from 'react';
import Button from './Button';
import Styles from '../utils/Styles';

const ConfirmSelfie = ({handleStepChange}) => {
  return (
    <View
      style={{
        paddingBottom: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Image
        source={require('../imgs/selfie.png')}
        style={{
          width: 250,
          height: 250,
          borderRadius: 250,
          borderWidth: 2,
          borderColor: Styles.blackColor,
        }}
      />

      <View style={{width: '100%', rowGap: 20}}>
        <Button label="Continue" action={() => handleStepChange(5)} />
        <Button
          action={() => handleStepChange(3)}
          label="Take A New Selfie"
          styles={{
            backgroundColor: 'transparent',
            color: Styles.blackColor,
            borderWidth: 1,
            borderColor: Styles.blackColor,
          }}
        />
      </View>
    </View>
  );
};

export default ConfirmSelfie;
