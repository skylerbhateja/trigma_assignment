import React from 'react';
import textStyles from '../customText/textStyle';
import {buttonStyles} from './buttonStyle';
import { TouchableOpacity } from 'react-native';
import CustomText from '../customText';

const CustomButton = ({
  shouldDisable,
  onPress,
  title,
  textSize,
  btnStyle,
  buttonTextStyle,
  borderRadius,
}) => {
  const textStyle = textStyles();
  const buttonStyle = buttonStyles();
  return (
    <TouchableOpacity
      disabled={shouldDisable}
      onPress={onPress}
      style={{
        ...buttonStyle.btnView,
        ...(btnStyle ?? {}),
        ...(!!borderRadius && {
          borderWidth: 0,
          borderRadius,
        }),
      }}>
      <CustomText
        text={title}
        txtSize={textSize}
        txtStyle={{
          ...textStyle?.white_Regular18,
          ...(buttonTextStyle ?? {}),
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
