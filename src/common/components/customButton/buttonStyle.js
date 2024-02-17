import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { scaleSize } from "../../utils/scaleSheet";


export const buttonStyles = () =>
  StyleSheet.create({
    btnView: {
      paddingHorizontal: scaleSize(15),
      paddingVertical: scaleSize(15),
      borderRadius: scaleSize(7),
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: Colors.main,
    },
  });