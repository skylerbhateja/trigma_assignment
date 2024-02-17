import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheet';
import {Colors} from '../../styles/colors';

const textStyles = () =>
  StyleSheet.create({
    red_Regular16: {
      fontSize: scaleFontSize(16),
      fontFamily: 'Poppins-Regular',
      color: Colors?.red,
      marginBottom: scaleSize(2),
    },
    grey_Regular13: {
      fontSize: scaleFontSize(13),
      fontFamily: 'Poppins-Regular',
      color: Colors?.gray,
      marginBottom: scaleSize(2),
    },
    white_Bold12: {
      fontSize: scaleFontSize(12),
      fontFamily: 'Poppins-Bold',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    white_Regular14: {
      fontSize: scaleFontSize(14),
      fontFamily: 'Poppins-Regular',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    white_Regular16: {
      fontSize: scaleFontSize(16),
      fontFamily: 'Poppins-Regular',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    main_SemiBold14: {
      fontSize: scaleFontSize(14),
      fontFamily: 'Poppins-SemiBold',
      color: Colors?.main,
      marginBottom: scaleSize(2),
    },
    white_Regular18: {
      fontSize: scaleFontSize(18),
      fontFamily: 'Poppins-Regular',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    white_Bold16: {
      fontSize: scaleFontSize(16),
      fontFamily: 'Poppins-Bold',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    white_Bold14: {
      fontSize: scaleFontSize(14),
      fontFamily: 'Poppins-Bold',
      color: Colors?.white,
      marginBottom: scaleSize(2),
    },
    white_Bold18: {
      fontSize: scaleFontSize(18),
      color: Colors?.white,
      fontFamily: 'Poppins-Bold',
      marginBottom: scaleSize(2),
    },
    white_SemiBold18: {
      fontSize: scaleFontSize(18),
      color: Colors?.white,
      fontFamily: 'Poppins-SemiBold',
      marginBottom: scaleSize(2),
    },
    white_SemiBold24: {
      fontSize: scaleFontSize(24),
      color: Colors?.white,
      fontFamily: 'Poppins-SemiBold',
      marginBottom: scaleSize(2),
    },
  });

export default textStyles;
