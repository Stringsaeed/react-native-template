import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useMemoOne as useMemo } from 'use-memo-one';

import { RegisteredStyles } from '@styles';
import { ProxyViewProps } from '@interfaces';

const {
  container: containerStyle,
  centered: centeredStyle,
  row: rowStyle,
  noGrow: noGrowStyle,
  noShrink: noShrinkStyle,
  wrap: wrapStyle,
  absolute: absoluteStyle,
  fill: fillStyle,
  grow: growStyle,
  spaceBetween: spaceBetweenStyle,
  spaceAround: spaceAroundStyle,
  spaceEvenly: spaceEvenlyStyle,
  centerRow: centerRowStyle,
  centerCol: centerColStyle,
  flexStartRow: flexStartRowStyle,
  flexEndRow: flexEndRowStyle,
  flexStartVertical: flexStartVerticalStyle,
  flexEndVertical: flexEndVerticalStyle,
  selfStart: selfStartStyle,
  selfEnd: selfEndStyle,
  selfCenter: selfCenterStyle,
  selfStretch: selfStretchStyle,
  shrink: shrinkStyle,
  noShadow: noShadowStyle,
  noOverflow: noOverflowStyle
} = RegisteredStyles;

const ProxyView: React.FC<ProxyViewProps> = ({
  children,
  centered,
  row,
  noGrow,
  noShrink,
  wrap,
  absolute,
  fill,
  color,
  type,
  style: userStyle,
  grow,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  centerRow,
  centerCol,
  flexStartRow,
  flexEndRow,
  flexStartVertical,
  flexEndVertical,
  selfStart,
  selfEnd,
  selfCenter,
  selfStretch,
  shrink,
  noShadow,
  noOverflow,
  width,
  height,
  ...props
}) => {
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        type !== 'scrollable' && containerStyle,
        centered && centeredStyle,
        row && rowStyle,
        noGrow && noGrowStyle,
        noShrink && noShrinkStyle,
        wrap && wrapStyle,
        absolute && absoluteStyle,
        fill && fillStyle,
        grow && growStyle,
        spaceBetween && spaceBetweenStyle,
        spaceAround && spaceAroundStyle,
        spaceEvenly && spaceEvenlyStyle,
        centerRow && centerRowStyle,
        centerCol && centerColStyle,
        flexStartRow && flexStartRowStyle,
        flexEndRow && flexEndRowStyle,
        flexStartVertical && flexStartVerticalStyle,
        flexEndVertical && flexEndVerticalStyle,
        selfStart && selfStartStyle,
        selfEnd && selfEndStyle,
        selfCenter && selfCenterStyle,
        selfStretch && selfStretchStyle,
        shrink && shrinkStyle,
        noShadow && noShadowStyle,
        noOverflow && noOverflowStyle,
        { backgroundColor: color },
        { width },
        { height },
        userStyle
      ]),
    [
      type,
      absolute,
      centerCol,
      centerRow,
      centered,
      color,
      fill,
      flexEndRow,
      flexEndVertical,
      flexStartRow,
      flexStartVertical,
      grow,
      height,
      noGrow,
      noOverflow,
      noShadow,
      noShrink,
      row,
      selfCenter,
      selfEnd,
      selfStart,
      selfStretch,
      shrink,
      spaceAround,
      spaceBetween,
      spaceEvenly,
      userStyle,
      width,
      wrap
    ]
  );

  switch (type) {
    case 'scrollable':
      return (
        <ScrollView {...props} contentContainerStyle={style} style={userStyle}>
          {children}
        </ScrollView>
      );
    case 'touchable':
      return (
        <TouchableOpacity {...props} style={style}>
          {children}
        </TouchableOpacity>
      );
    default:
      return (
        <View {...props} style={style}>
          {children}
        </View>
      );
  }
};

export default ProxyView;
