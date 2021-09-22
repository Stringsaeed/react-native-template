import {ReactNode} from 'react';
import {BoxProps, createBox} from 'restyle';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {ThemeT} from '@styles';

export type TouchableProps = BoxProps<ThemeT> &
  TouchableOpacityProps & {
    children?: ReactNode;
  };

const TouchableBox = createBox<
  ThemeT,
  TouchableOpacityProps & {
    children?: ReactNode;
  }
>(TouchableOpacity);

export default TouchableBox;
