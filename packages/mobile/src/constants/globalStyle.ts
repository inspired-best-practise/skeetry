import { TextStyle } from 'react-native';
import { MapStyleElement } from 'react-native-maps';

export const radius = {
  s: 6,
  m: 8,
  l: 16,
};

export const fontFamily = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
};

export const fontSize = {
  h1: 56,
  h2: 40,
  h3: 28,
  h4: 20,
  h5: 16,
  paragraph: 14,
  small: 12,
  xs: 10,
};

export const colors = {
  text: '#000',
  primary100: '#dee3ea',
  primary200: '#b2bdcd',
  primary300: '#5d7290',
  primary600: '#323d4d',
  primary700: '#242c37',
  primary800: '#151a21',
  primary900: '#0b0e11',
  secondary: '#5575e7',
  secondaryWashedOut: '#879eed',
  accent: '#fd4d4d',
  accentHover: '#fd6868',
  accentDisabled: '#f5bfbf',
  black: '#000',
};

const textBase: TextStyle = {
  fontFamily: fontFamily.regular,
  color: colors.text,
};

export const h1: TextStyle = {
  ...textBase,
  lineHeight: 90,
  fontSize: fontSize.h1,
  fontWeight: '700',
};

export const h2: TextStyle = {
  ...textBase,
  lineHeight: 64,
  fontSize: fontSize.h2,
  fontWeight: '700',
};

export const h3: TextStyle = {
  ...textBase,
  lineHeight: 45,
  fontSize: fontSize.h3,
  fontWeight: '700',
};

export const h4: TextStyle = {
  ...textBase,
  lineHeight: 32,
  fontSize: fontSize.h4,
  fontWeight: '700',
};

export const paragraph: TextStyle = {
  ...textBase,
  fontWeight: '500',
  fontSize: fontSize.paragraph,
  lineHeight: 22,
};

export const paragraphBold: TextStyle = {
  ...paragraph,
  fontWeight: '700',
};

export const small: TextStyle = {
  ...textBase,
  fontWeight: '500',
  fontSize: fontSize.small,
  lineHeight: 22,
};

export const smallBold: TextStyle = {
  ...small,
  fontWeight: '700',
};

export const xsmall: TextStyle = {
  ...textBase,
  fontWeight: '500',
  fontSize: fontSize.xs,
  lineHeight: 16,
};

export const xsmallBold: TextStyle = {
  ...xsmall,
  fontWeight: '700',
};

export const mapGfxStyle: MapStyleElement[] = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
        color: '#000',
        invert_lightness: true,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
