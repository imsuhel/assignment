import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import PanDetails from '../Components/PanDetails';
import Styles from '../utils/Styles';
import AadharDetails from '../Components/AadharDetails';
import TakeSelfie from '../Components/TakeSelfie';
import Congratulation from '../Components/Congratulation';
import BottomTab from '../Components/BottomTab';
import ConfirmSelfie from '../Components/ConfirmSelfie';

const HomeScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  function updateStep(count) {
    setCurrentStep(count);
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#EDEEF0',
      }}>
      <View style={{backgroundColor: Styles.whiteColor, paddingHorizontal: 20}}>
        {currentStep !== 5 && (
          <>
            <View style={[Styles.row, Styles.alignCenter]}>
              <TouchableOpacity>
                <Image
                  source={require('../imgs/backBtn.png')}
                  style={{width: 40, height: 40, marginRight: 20}}
                />
              </TouchableOpacity>
              <Text
                style={[
                  Styles.bigTxt,
                  {
                    color: Styles.blackColor,
                    textAlign: 'center',
                    width: '70%',
                    textTransform: 'capitalize',
                  },
                ]}>
                {currentStep == 1
                  ? 'Pan Details'
                  : currentStep == 2
                  ? 'aadhar detail'
                  : currentStep == 3
                  ? 'selfie'
                  : null}
              </Text>
            </View>
            <View
              style={[
                Styles.row,
                Styles.between,
                Styles.alignCenter,
                {marginVertical: 14},
              ]}>
              <View style={internalStyle.barGray}>
                <View
                  style={[
                    internalStyle.barActive,
                    currentStep > 1 ? {width: '100%'} : {width: '50%'},
                  ]}
                />
              </View>
              <View style={internalStyle.barGray}>
                <View
                  style={[
                    internalStyle.barActive,
                    currentStep == 2
                      ? {width: '50%'}
                      : currentStep > 2
                      ? {width: '100%'}
                      : {width: '0%'},
                  ]}
                />
              </View>

              <View style={internalStyle.barGray}>
                <View
                  style={[
                    internalStyle.barActive,
                    currentStep == 3
                      ? {width: '50%'}
                      : currentStep > 3
                      ? {width: '100%'}
                      : {width: '0%'},
                  ]}
                />
              </View>
            </View>
          </>
        )}
      </View>
      {currentStep == 1 ? (
        <PanDetails handleStepChange={updateStep} />
      ) : currentStep == 2 ? (
        <AadharDetails handleStepChange={updateStep} />
      ) : currentStep == 3 ? (
        <TakeSelfie handleStepChange={updateStep} />
      ) : currentStep == 4 ? (
        <ConfirmSelfie handleStepChange={updateStep} />
      ) : currentStep == 5 ? (
        <Congratulation />
      ) : null}

      <BottomTab />
    </View>
  );
};

export default HomeScreen;

const internalStyle = StyleSheet.create({
  barGray: {
    width: '32%',
    height: 6,
    borderRadius: 10,
    backgroundColor: Styles.borderColor,
    overflow: 'hidden',
  },
  barActive: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: Styles.blackColor,
  },
});
