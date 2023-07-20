import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Button from './Button';
import Styles from '../utils/Styles';

const Congratulation = () => {
  return (
    <View
      style={{
        paddingBottom: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}>
        <Image
          source={require('../imgs/congratulation.png')}
          style={{width: '100%', height: 400, resizeMode: 'contain'}}
        />
        <Text
          style={[
            Styles.bigTxt,
            {
              width: '50%',
              alignSelf: 'center',
              color: Styles.blackColor,
              marginBottom: 40,
              fontSize: 30,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
          ]}>
          welcome to gaurapay
        </Text>
        <Button label="Go To Home" action={() => {}} />
      </ScrollView>
    </View>
  );
};

export default Congratulation;
