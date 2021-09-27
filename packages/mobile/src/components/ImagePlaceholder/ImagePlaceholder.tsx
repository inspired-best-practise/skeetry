import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '_app/constants';

import { s } from './styles';

const ImagePlaceholder = ({ style, size }) => {
  return (
    <View style={style}>
      <View style={s.imagePlaceholder}>
        <Icon name="image" color={colors.baseGray} size={size} />
      </View>
    </View>
  );
};

export default ImagePlaceholder;
