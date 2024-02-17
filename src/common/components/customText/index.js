import {Text} from 'react-native';
import React from 'react';
import textStyles from './textStyle';

const CustomText = ({text, txtStyle, txtSize,textAlign, numberOfLines, onTextPress}) => {
  const styles = textStyles();
  return (
    <Text
      onPress={onTextPress}
      numberOfLines={numberOfLines ?? 0}
      style={[
        styles.white_Bold16,
        txtStyle ?? {},
        textAlign ? {textAlign: textAlign} : {},
        txtSize ? {fontSize: txtSize} : {},
      ]}>
      {text ?? ''}
    </Text>
  );
};

export default CustomText;
