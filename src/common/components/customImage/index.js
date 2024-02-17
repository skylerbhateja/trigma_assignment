import {View, Text, Image} from 'react-native';
import React from 'react';
import {imageStyles} from './imageStyles';

const CustomImage = ({source, tintColor, imageStyle, sourceType}) => {
  const imageStyled = imageStyles();
  return source ? (
    <Image
      resizeMode="contain"
      style={[
        imageStyled.icon_20, // default style object
        imageStyle ?? {}, // overrides the default style of the image
        tintColor ? {tintColor} : {}, // to add a tint color, can be passed through props
      ]}
      source={sourceType === 'URL' ? {uri: `${source}`} : source} // source will display image based on if it contains a url or is a locally stored image
    />
  ) : (
    <View />
  );
};

export default CustomImage;
