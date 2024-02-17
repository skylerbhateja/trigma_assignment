import {StyleSheet} from 'react-native';
import {scaleSize} from '../../utils/scaleSheet';

export const imageStyles = () =>
  StyleSheet.create({
    icon_20: {
      width: scaleSize(20),
      height: scaleSize(20),
      marginRight:scaleSize(10)
    },
  });
