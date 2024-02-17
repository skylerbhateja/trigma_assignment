import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../common/styles/colors';
import CustomText from '../../common/components/customText';
import textStyles from '../../common/components/customText/textStyle';
import CustomTextInput from '../../common/components/customTextInput';
import {Images} from '../../common/constants/images';
import CustomButton from '../../common/components/customButton';
import {scaleSize} from '../../common/utils/scaleSheet';
import useLoginController from './useLoginController';
import {loginStyles} from './loginStyles';
import {globalStyles} from '../../common/styles/globalStyles';

const LoginScreen = () => {
  const txtStyle = textStyles();
  const styles = loginStyles();
  const globalStyle = globalStyles();
  const {
    login,
    email,
    password,
    shouldDisable,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  } = useLoginController();

  return (
    <KeyboardAwareScrollView style={globalStyle.container}>
      <View style={globalStyle.marginV52}>
        <CustomText txtStyle={txtStyle.white_SemiBold24} text={'Log In'} />
        <CustomText
          txtStyle={txtStyle.white_Regular14}
          text={'Welcome back!'}
        />
      </View>
      <View>
        <View>
          <CustomText
            txtStyle={txtStyle.white_Regular16}
            textAlign={'center'}
            text={'Please enter your login details'}
          />
        </View>
        {login?.is_error && (
          <CustomText
            txtStyle={txtStyle.red_Regular16}
            textAlign={'center'}
            text={login?.message}
          />
        )}
        <View style={globalStyle.marginV25}>
          <View>
            <CustomTextInput
              label={'Enter Address'}
              leftImage={Images.MESSAGE}
              titleValue={email}
              titleOnChange={onChangeEmail}
              placeholder={'Enter email'}
            />
          </View>
          <View style={globalStyle.marginT20}>
            <CustomTextInput
              label={'Password'}
              leftImage={Images.LOCK}
              titleValue={password}
              titleOnChange={onChangePassword}
              placeholder={'Enter password'}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={globalStyle.flexRowBtw}>
          <View>
            <CustomText
              txtStyle={txtStyle.white_Regular14}
              text={'Remember me'}
            />
          </View>
          <View>
            <CustomText
              txtStyle={{...txtStyle.main_SemiBold14}}
              text={'Forget Password?'}
            />
          </View>
        </View>
        <View style={globalStyle.marginT20}>
          <CustomButton
            shouldDisable={shouldDisable}
            onPress={onSubmit}
            title={'Log In'}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
