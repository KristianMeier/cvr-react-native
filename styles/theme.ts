import normalize from 'react-native-normalize'

const COLORS = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
}

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
}

export const FontSizes = {
  s: normalize(14),
  m: normalize(16),
  l: normalize(18),
  xl: normalize(20),
}

const SHADOWS = {
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

const BORDERS = {
  standard: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderType: 'solid',
  },
}

export { COLORS, FONT, SIZES, SHADOWS, BORDERS }
