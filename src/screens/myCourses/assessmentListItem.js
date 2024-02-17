import {View} from 'react-native';
import React from 'react';
import CustomText from '../../common/components/customText';
import CustomButton from '../../common/components/customButton';
import textStyles from '../../common/components/customText/textStyle';
import {scaleFontSize} from '../../common/utils/scaleSheet';
import {myCourseStyle} from './myCourseStyles';

const AssessmentListItem = ({subject, level, numOfquestions}) => {
  const txtStyle = textStyles();
  const styles = myCourseStyle();

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.flex1}>
        <CustomText
          txtStyle={{...txtStyle.white_SemiBold18, marginBottom: 0}}
          text={subject}
        />
        <CustomText
          txtStyle={{...txtStyle.grey_Regular13, marginBottom: 0}}
          text={`${numOfquestions} Question | ${level}`}
        />
      </View>
      <CustomButton
        buttonTextStyle={txtStyle.white_Bold14}
        textSize={scaleFontSize(15)}
        btnStyle={styles.listItemBtn}
        title={'Start'}
      />
    </View>
  );
};

export default AssessmentListItem;
