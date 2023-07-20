import {StyleSheet} from 'react-native';

const whiteColor = '#ffffff';
const blackColor = '#1C1D1F';
const screenBG = '#EDEEF0';
const borderColor = '#E7F6F2';

export default StyleSheet.create({
  whiteColor: whiteColor,
  blackColor: blackColor,
  screenBG: screenBG,
  borderColor: borderColor,

  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  bigTxt: {
    fontSize: 18,
    fontFamily: 'poppinsBold',
    fontWeight: 'bold',
    color: whiteColor,
  },
  normalTxt: {
    fontSize: 14,
    fontFamily: 'poppinsRegular',
    color: whiteColor,
  },
  buttonStyle: {
    paddingVertical: 18,
    paddingHorizontal: 14,
    fontWeight: 'bold',
    color: whiteColor,
    backgroundColor: blackColor,
    borderRadius: 40,
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: whiteColor,
    paddingHorizontal: 15,
    color: whiteColor,
    fontSize: 18,
    textAlign: 'center',
  },
});
