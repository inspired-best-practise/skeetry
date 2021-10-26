import React from 'react';
import { useColorScheme, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '_app/constants';

import { s } from './styles';

const ImagePlaceholder = ({ style, size }) => {
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

export default ImagePlaceholder;
