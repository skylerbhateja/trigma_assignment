import React from 'react';
import CustomImage from '../../common/components/customImage';
import {Images} from '../../common/constants/images';
import {FlatList, View} from 'react-native';
import CustomText from '../../common/components/customText';
import textStyles from '../../common/components/customText/textStyle';
import CustomTextInput from '../../common/components/customTextInput';
import AssessmentListItem from './assessmentListItem';
import useCoursesController from './useCoursesController';
import {myCourseStyle} from './myCourseStyles';
import {globalStyles} from '../../common/styles/globalStyles';

const MyCourses = () => {
  const {courses} = useCoursesController();
  const styles = myCourseStyle();
  const txtStyle = textStyles();
  const globalStyle = globalStyles();
  return (
    <View style={globalStyle.container}>
      <View style={styles.header}>
        <CustomImage source={Images.MENU} />
        <CustomText txtStyle={txtStyle.white_SemiBold18} text={'My Course'} />
        <View style={globalStyle.flexRowCenter}>
          <CustomImage imageStyle={styles.bellIcon} source={Images.BELL} />
          <CustomImage imageStyle={styles.userIcon} source={Images.USER} />
        </View>
      </View>
      <View style={styles.searchInputContainer}>
        <CustomTextInput
          leftImage={Images.SEARCH}
          placeholder={'Search Topics Here...'}
        />
      </View>
      <View style={styles.flex1}>
        <CustomText
          txtStyle={{...txtStyle.white_SemiBold18, marginBottom: 0}}
          text={'Assessment List'}
        />
        <FlatList
          data={courses?.data}
          renderItem={({item}) => {
            const {subject, difficulty_level, number_of_questions} = item;
            return (
              <AssessmentListItem
                subject={subject}
                level={difficulty_level}
                numOfquestions={number_of_questions}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyCourses;
