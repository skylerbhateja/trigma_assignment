import {Text, TextInput, View} from 'react-native';
import styled from './style';
import React from 'react';
import {Colors} from '../../styles/colors';
import CustomImage from '../customImage';
import {scaleSize} from '../../utils/scaleSheet';
import CustomText from '../customText';
import textStyles from '../customText/textStyle';

const CustomTextInput = ({
  label,
  leftImage,
  placeholder,
  titleValue,
  multiline,
  style,
  titleOnChange,
  leftImageStyle,
}) => {
  const styles = styled();
  const txtStyle = textStyles();

  const onChange = value => {
    if (titleOnChange) {
      titleOnChange(value);
    }
  };
  return (
    <>
      {label && <CustomText txtStyle={txtStyle.white_Regular14} text={label} />}
      <View
        style={styles.container}>
        {leftImage && (
          <CustomImage source={leftImage} imageStyle={{...leftImageStyle}} />
        )}
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder ?? ''}
          placeholderTextColor={Colors.placeholder}
          onChangeText={onChange}
          value={titleValue}
          multiline={multiline ?? true}
          maxLength={100}
        />
      </View>
    </>
  );
};

export default CustomTextInput;
