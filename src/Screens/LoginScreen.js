import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Styles from '../utils/Styles';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={{flex: 1, height: '100%'}}>
        <View style={{height: '50%'}}>
          <Image
            source={require('../imgs/step4.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              marginTop: 40,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: Styles.blackColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '50%',
            padding: 20,
          }}>
          <Text style={[Styles.bigTxt, {textAlign: 'center'}]}>login</Text>
          <Text
            style={[
              Styles.normalTxt,
              {
                paddingTop: 10,
                paddingBottom: 30,
                textTransform: 'capitalize',
                textAlign: 'center',
                width: '50%',
                alignSelf: 'center',
              },
            ]}>
            Excepteur sint occaecat cupidatat non proident, sunt
          </Text>
          <Text
            style={[
              Styles.normalTxt,
              {
                textAlign: 'center',
                textTransform: 'capitalize',
                opacity: 0.6,
              },
            ]}>
            phone number
          </Text>
          <TextInput
            placeholder=""
            keyboardType="number-pad"
            style={[Styles.inputField, {marginBottom: 30}]}
          />
          <Button
            label="Login"
            action={() => navigation.navigate('HomeScreen')}
            styles={{
              color: Styles.blackColor,
              backgroundColor: Styles.whiteColor,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
