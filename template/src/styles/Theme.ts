import {createTheme} from 'restyle';

import Fonts from './Fonts';
import Palette from './Palette';

const Theme = createTheme({
  colors: Palette,
  borderRadii: {'2xs': 2, xs: 4, sm: 6, md: 8, lg: 16, xl: 32, xxl: 64},
  breakpoints: {},
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    '12': 12,
    lg: 16,
    xl: 24,
    '2xl': 32,
    '3xl': 48
  },
  textVariants: Fonts
});

export type ThemeT = typeof Theme;

export default Theme;
