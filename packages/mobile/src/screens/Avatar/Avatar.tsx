import React from 'react';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '_app/utils/dimensions';

import { s } from './styles';

export const AvatarScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <SafeAreaView style={s.container}>
      <FastImage
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={{
          height: SCREEN_HEIGHT / 2,
          width: SCREEN_WIDTH,
        }}
      />
    </SafeAreaView>
  );
};
