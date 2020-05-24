import * as React from 'react';
import {View} from 'react-native';
import {RegisteredStyles} from '@styles';
import {ContainerProps} from '@interfaces';

const Container: React.FC<ContainerProps> = ({
  children,
  centered,
  row,
  noGrow,
  noShrink,
  wrap,
  absolute,
  fill,
}) => (
  <View
    style={[
      RegisteredStyles.container,
      centered && RegisteredStyles.centered,
      row && RegisteredStyles.row,
      noGrow && RegisteredStyles.noGrow,
      noShrink && RegisteredStyles.noShrink,
      wrap && RegisteredStyles.wrap,
      absolute && RegisteredStyles.absolute,
      fill && RegisteredStyles.fill,
    ]}>
    {children}
  </View>
);

export default Container;
