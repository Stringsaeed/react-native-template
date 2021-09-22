import {ReactNode} from 'react';
import {BoxProps, createBox} from 'restyle';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

import {ThemeT} from '@styles';

export type TouchableProps = BoxProps<ThemeT> &
  SafeAreaViewProps & {
    children?: ReactNode;
  };

const TouchableBox = createBox<
  ThemeT,
  SafeAreaViewProps & {
    children?: ReactNode;
  }
>(SafeAreaView);

export default TouchableBox;
