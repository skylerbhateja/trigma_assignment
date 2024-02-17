import {StyleSheet} from 'react-native';
import {Colors} from '../../common/styles/colors';
import {scaleFontSize, scaleSize} from '../../common/utils/scaleSheet';

export const myCourseStyle = () =>
  StyleSheet.create({
    flex1: {flex: 1},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: scaleSize(18),
      marginBottom: scaleSize(20),
    },
    bellIcon: {
      width: scaleSize(17),
      height: scaleSize(18),
      marginRight: scaleSize(15),
    },
    userIcon: {width: scaleSize(40), height: scaleSize(40)},
    searchInputContainer: {
      flexDirection: 'row',
      marginBottom: scaleFontSize(20),
    },
    listItemContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: scaleSize(5),
      borderColor: '#FFFFFF1A',
      backgroundColor: '#191712',
      padding: scaleSize(10),
      marginTop: scaleSize(15),
    },
    listItemBtn: {
      width: scaleSize(55),
      height: scaleSize(34),
      paddingHorizontal: scaleSize(3),
      paddingVertical: scaleSize(6),
    },
  });
