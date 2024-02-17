import React from 'react';
import {TextInput, View} from 'react-native';
import styled from './style';
import {Colors} from '../../styles/colors';
import CustomImage from '../customImage';
import CustomText from '../customText';
import textStyles from '../customText/textStyle';

const CustomTextInput = ({
  label,
  leftImage,
  placeholder,
  titleValue,
  multiline = false,
  style,
  titleOnChange,
  leftImageStyle,
  secureTextEntry = false,
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
      <View style={styles.container}>
        {leftImage && (
          <CustomImage source={leftImage} imageStyle={{...leftImageStyle}} />
        )}
        <TextInput
          style={[styles.input, style]}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder ?? ''}
          placeholderTextColor={Colors.placeholder}
          onChangeText={onChange}
          value={titleValue}
          multiline={multiline}
          maxLength={100}
        />
      </View>
    </>
  );
};

export default CustomTextInput;
