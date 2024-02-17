import {Dimensions, PixelRatio} from 'react-native';
import {screenHeight, screenWidth} from './dimensions';

const {height} = Dimensions.get('screen');

const baseWidth = 375;
const baseHeight = 667;
const heightBottom = height / 6;

export const extremHeightBtm = heightBottom / 3.3;

/**
 * adjust scalesize
 * @param size
 * @returns
 */
export const scaleSize = size => {
  const scaledWidth = (screenWidth / baseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.round(scaledWidth);
};

/**
 * get screen width
 * @param size
 * @returns
 */
export const scaleSizeWidth = size =>
  Math.round((screenWidth / baseWidth) * size);

/**
 * get screen height
 * @param size
 * @returns
 */
export const scaleSizeHeight = size =>
  Math.round((screenHeight / baseHeight) * size);

/**
 * adjust the size of the fonts
 * @param size
 * @returns
 */
export const scaleFontSize = size => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
