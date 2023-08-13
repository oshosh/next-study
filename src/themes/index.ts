import colors from './colors';
import fontSizes from './fontSizes';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import space from './space';

export const ThemeProvider = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
