import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from '../utils/Styles';
import Button from '../Components/Button';

const PanDetails = ({handleStepChange}) => {
  const [showMore, setShowMore] = useState(false);
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
              placeholder="Email"
              placeholderTextColor="#454545"
            />
          </View>
          <View style={internalStyle.inputWrapper}>
            <Image
              source={require('../imgs/calander.png')}
              style={internalStyle.inputIcon}
            />
            <TextInput
              style={internalStyle.inputStyle}
              placeholder="Date Of Birth"
              placeholderTextColor="#454545"
            />
          </View>
        </View>
        {/* --------------------------------------- */}
        <Pressable
          onPress={() => setShowMore(!showMore)}
          style={[
            Styles.row,
            Styles.between,
            Styles.alignCenter,
            {marginTop: 20},
          ]}>
          <Text style={[Styles.bigTxt, {color: Styles.blackColor}]}>
            Show More
          </Text>
          <Image
            source={
              showMore
                ? require('../imgs/arrowDown.png')
                : require('../imgs/arrowUp.png')
            }
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        </Pressable>

        {showMore && (
          <View style={[internalStyle.inputWrapper, {marginBottom: 0}]}>
            <Image
              source={require('../imgs/user.png')}
              style={internalStyle.inputIcon}
            />
            <TextInput
              style={internalStyle.inputStyle}
              placeholder="Name (As Per Pan)"
              placeholderTextColor="#454545"
            />
          </View>
        )}
      </View>

      <View style={{width: '90%', alignSelf: 'center'}}>
        <Button label="Next" action={() => handleStepChange(2)} />
      </View>
    </>
  );
};

export default PanDetails;

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
