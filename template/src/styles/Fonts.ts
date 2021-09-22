import {Platform, StyleSheet, TextStyle} from 'react-native';

import {getDesignSize} from '@utils';

type Weight = '700' | '600' | '400';

const weightMap = new Map<Weight, string>();
weightMap.set(
  '700',
  Platform.select({default: '700' as const, android: 'Bold'}),
);
weightMap.set(
  '600',
  Platform.select({default: '600' as const, android: 'SemiBold'}),
);
weightMap.set(
  '400',
  Platform.select({default: '400' as const, android: 'Regular'}),
);

const getFontFamily = (weight: Weight) =>
  Platform.select<TextStyle>({
    default: {
      fontFamily: 'Poppins',
      fontWeight: weightMap.get(weight) as TextStyle['fontWeight'],
    },
    android: {
      fontFamily: `Poppins-${weightMap.get(weight)}`,
    },
  });

const Fonts = StyleSheet.create({
  bold24: {
    ...getFontFamily('700'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(36),
    fontSize: getDesignSize(24),
  },
  bold18: {
    ...getFontFamily('700'),
    lineHeight: getDesignSize(27),
    fontSize: getDesignSize(18),
    letterSpacing: getDesignSize(-0.3),
  },
  bold16: {
    ...getFontFamily('700'),
    lineHeight: getDesignSize(24),
    fontSize: getDesignSize(16),
  },
  semi22: {
    ...getFontFamily('600'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(33),
    fontSize: getDesignSize(22),
  },
  semi18: {
    ...getFontFamily('600'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(27),
    fontSize: getDesignSize(18),
  },
  semi16: {
    ...getFontFamily('600'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(24),
    fontSize: getDesignSize(16),
  },
  semi14: {
    ...getFontFamily('600'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(21),
    fontSize: getDesignSize(14),
  },
  medium18: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(27),
    fontSize: getDesignSize(18),
  },
  medium16: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(24),
    fontSize: getDesignSize(16),
  },
  medium14: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(21),
    fontSize: getDesignSize(14),
  },
  medium12: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(18),
    fontSize: getDesignSize(12),
  },
  medium10: {
    ...getFontFamily('600'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(15),
    fontSize: getDesignSize(10),
  },
  regular16: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(24),
    fontSize: getDesignSize(16),
  },
  regular14: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(20),
    fontSize: getDesignSize(14),
  },
  regular12: {
    ...getFontFamily('400'),
    letterSpacing: getDesignSize(-0.3),
    lineHeight: getDesignSize(16),
    fontSize: getDesignSize(12),
  },
});

export default Fonts;
