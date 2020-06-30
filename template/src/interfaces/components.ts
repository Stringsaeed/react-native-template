import {
  ScrollViewProps,
  TouchableOpacityProps,
  ViewProps
} from 'react-native';

interface BaseViewProps extends ViewProps {
  centered?: Boolean;
  row?: Boolean;
  wrap?: Boolean;
  noGrow?: Boolean;
  noShrink?: Boolean;
  absolute?: Boolean;
  fill?: Boolean;
  noFlex?: Boolean;
  touchable?: Boolean;
  container?: Boolean;
  grow?: Boolean;
  spaceBetween?: Boolean;
  spaceAround?: Boolean;
  spaceEvenly?: Boolean;
  centerRow?: Boolean;
  centerCol?: Boolean;
  flexStartRow?: Boolean;
  flexEndRow?: Boolean;
  flexStartVertical?: Boolean;
  flexEndVertical?: Boolean;
  selfStart?: Boolean;
  selfEnd?: Boolean;
  selfCenter?: Boolean;
  selfStretch?: Boolean;
  shrink?: Boolean;
  noShadow?: Boolean;
  noOverflow?: Boolean;
  color?: string;
  width?: number | string;
  height?: number | string;
  type?: 'touchable' | 'scrollable';
}

interface TouchableContainerProps
  extends TouchableOpacityProps,
    BaseViewProps {}

interface ScrollableContainerProps extends ScrollViewProps, BaseViewProps {}

export type ProxyViewProps = TouchableContainerProps &
  ScrollableContainerProps &
  BaseViewProps;
