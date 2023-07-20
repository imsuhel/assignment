import {View, Text, Image, StyleSheet, TextInput, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from '../utils/Styles';
import Button from '../Components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Ripple from 'react-native-material-ripple';

const AadharDetails = ({handleStepChange}) => {
  const [showmodal, setShowModal] = useState(false);
  return (
    <>
      <View
        style={{
          paddingBottom: 30,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          borderBottomLeftRadius: 26,
          borderBottomRightRadius: 26,
          marginBottom: 40,
        }}>
        {/* ---------------------------------------- */}

        <View>
          <View style={internalStyle.inputWrapper}>
            <Image
              source={require('../imgs/email.png')}
              style={internalStyle.inputIcon}
            />
            <TextInput
              style={internalStyle.inputStyle}
              placeholder="Aadhar Number"
              placeholderTextColor="#454545"
            />
          </View>
        </View>
        {/* --------------------------------------- */}
      </View>

      <View style={{width: '90%', alignSelf: 'center'}}>
        <Button label="get otp" action={() => setShowModal(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showmodal}
        onRequestClose={() => {
          setShowModal(false);
        }}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: Styles.whiteColor,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: Styles.whiteColor,
              padding: 20,
            }}>
            <Image
              source={require('../imgs/aadharVerify.png')}
              style={{width: '100%', height: 170, resizeMode: 'contain'}}
            />
            <Text
              style={[
                Styles.normalTxt,
                {
                  color: Styles.blackColor,
                  textAlign: 'center',
                  paddingHorizontal: 20,
                  marginVertical: 20,
                },
              ]}>
              otp has been sent on mobile number please enter otp to verify
              mobile number
            </Text>
            <OTPInputView
              style={{
                width: '90%',
                height: 60,
                alignSelf: 'center',
              }}
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={{
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Styles.blackColor,
                borderRadius: 0,
              }}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <Ripple
              style={{
                borderWidth: 1,
                borderColor: Styles.borderColor,
                borderRadius: 50,
                alignSelf: 'center',
                marginVertical: 20,
                overflow: 'hidden',
              }}>
              <Text
                style={[
                  Styles.bigTxt,
                  {
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    color: Styles.blackColor,
                  },
                ]}>
                Resend Pin
              </Text>
            </Ripple>
            <Button
              label="Submit"
              action={() => {
                setShowModal(false);
                handleStepChange(3);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AadharDetails;

const internalStyle = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EDEEF0',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  inputStyle: {
    paddingVertical: 14,
    fontSize: 14,
    color: '#000',
    width: '87%',
  },
  inputIcon: {width: 40, height: 40, marginRight: 10},
});
