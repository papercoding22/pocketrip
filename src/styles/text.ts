import {StyleSheet} from 'react-native';

const textStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textLowercase: {
    textTransform: 'lowercase',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textDecorationNone: {
    textDecorationLine: 'none',
  },
  textDecorationUnderline: {
    textDecorationLine: 'underline',
  },
  textDecorationLineThrough: {
    textDecorationLine: 'line-through',
  },
  textDecorationUnderlineLineThrough: {
    textDecorationLine: 'underline line-through',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textBlack: {
    color: '#000000',
  },
  textWarning: {
    color: '#FFC107',
  },
  textSuccess: {
    color: '#28A745',
  },
  textError: {
    color: '#DC3545',
  },
});

export default textStyles;
