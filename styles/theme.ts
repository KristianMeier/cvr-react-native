import normalize from 'react-native-normalize'

export const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
}

export const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
}

export const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
}

export const FONTSIZES = {
  xs: normalize(10),
  s: normalize(14),
  m: normalize(16),
  l: normalize(18),
  xl: normalize(20),
}

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
}
