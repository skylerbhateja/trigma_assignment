import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheet';
import {Colors} from '../../styles/colors';

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1A1712',
      borderRadius: scaleSize(10),
      paddingVertical: scaleSize(6),
      paddingHorizontal: scaleSize(15),
      borderWidth: 1,
      borderColor: '#FFFFFF1A',
    },
    input: {
      flex: 1,
      fontSize: scaleFontSize(14),
      color: Colors.white,
      fontFamily: 'Poppins-Medium',
    },
  });

export default styles;
