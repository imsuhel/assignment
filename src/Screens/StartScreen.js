import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Styles from '../utils/Styles';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

function StartScreen() {
  const navigation = useNavigation();
  const [currectStep, setCurrentStep] = useState(1);
  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      {currectStep == 1 ? (
        <View style={{flex: 1, height: '100%'}}>
          <View style={{height: '50%'}}>
            <Image
              source={require('../imgs/step1.png')}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
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
            <Text style={[Styles.bigTxt]}>Step 1</Text>
            <Text
              style={[
                Styles.normalTxt,
                {paddingVertical: 10, textTransform: 'capitalize'},
              ]}>
              fill your pan card detail
            </Text>
            <Text style={[Styles.normalTxt, {marginBottom: 30}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
            <Button
              label="Next"
              action={() => setCurrentStep(2)}
              styles={{
                color: Styles.blackColor,
                backgroundColor: Styles.whiteColor,
              }}
            />

            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={[
                Styles.normalTxt,
                {position: 'absolute', right: 20, bottom: 20, padding: 10},
              ]}>
              Skip
            </Text>
          </View>
        </View>
      ) : currectStep == 2 ? (
        <View style={{flex: 1, height: '100%'}}>
          <View style={{height: '50%'}}>
            <Image
              source={require('../imgs/step2.png')}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
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
            <Text style={[Styles.bigTxt]}>Step 2</Text>
            <Text
              style={[
                Styles.normalTxt,
                {paddingVertical: 10, textTransform: 'capitalize'},
              ]}>
              fill your Aadhar card detail
            </Text>
            <Text style={[Styles.normalTxt, {marginBottom: 30}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
            <Button
              label="Next"
              action={() => setCurrentStep(3)}
              styles={{
                color: Styles.blackColor,
                backgroundColor: Styles.whiteColor,
              }}
            />

            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={[
                Styles.normalTxt,
                {position: 'absolute', right: 20, bottom: 20, padding: 10},
              ]}>
              Skip
            </Text>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, height: '100%'}}>
          <View style={{height: '50%'}}>
            <Image
              source={require('../imgs/step3.png')}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
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
            <Text style={[Styles.bigTxt]}>Step 3</Text>
            <Text
              style={[
                Styles.normalTxt,
                {paddingVertical: 10, textTransform: 'capitalize'},
              ]}>
              take a selfie
            </Text>
            <Text style={[Styles.normalTxt, {marginBottom: 30}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
            <Button
              label="Start"
              action={() => navigation.navigate('LoginScreen')}
              styles={{
                color: Styles.blackColor,
                backgroundColor: Styles.whiteColor,
              }}
            />

            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={[
                Styles.normalTxt,
                {position: 'absolute', right: 20, bottom: 20, padding: 10},
              ]}>
              Skip
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

export default StartScreen;
