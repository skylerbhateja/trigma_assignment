import {StyleSheet} from 'react-native';
import {scaleSize} from '../utils/scaleSheet';
import {Colors} from './colors';

export const globalStyles = () =>
  StyleSheet.create({
    flexRowCenter: {flexDirection: 'row', alignItems: 'center'},
    container: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
      padding: scaleSize(20),
    },
    marginV25: {marginVertical: scaleSize(25)},
    marginT20: {marginTop: scaleSize(20)},
    flexRowBtw: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    marginV52: {marginVertical: scaleSize(52)},
  });
