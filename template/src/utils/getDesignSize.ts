import {Dimensions} from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ptToPx = (size: number): number => {
  return size;
};

const CURRENT_RESOLUTION = Math.sqrt(HEIGHT * HEIGHT + WIDTH * WIDTH);

const create = (designSize = {width: 375, height: 812}) => {
  const DESIGN_RESOLUTION = Math.sqrt(
    ptToPx(designSize.height) * ptToPx(designSize.height) +
      ptToPx(designSize.width) * ptToPx(designSize.width),
  );
  const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return (size: number) => {
    'worklet';
    return RESOLUTIONS_PROPORTION * size;
  };
};

const getDesignSize = create();

export default getDesignSize;
