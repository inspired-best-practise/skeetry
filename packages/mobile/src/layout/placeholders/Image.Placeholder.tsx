import React from 'react';
import { useColorScheme, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors, radius } from '_app/constants';

export const ImagePlaceholder = ({ style, size }) => {
  const theme = useColorScheme();

  return (
    <View style={style}>
      <View
        style={[
          s.imagePlaceholder,
          theme === 'dark' ? { backgroundColor: colors.gray800 } : { backgroundColor: colors.mainGray },
        ]}
      >
        <Icon name="image" color={theme === 'dark' ? colors.gray500 : colors.baseGray} size={size} />
      </View>
    </View>
  );
};

export const s = StyleSheet.create({
  imagePlaceholder: {
    borderRadius: radius.base,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
