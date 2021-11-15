import React from 'react';
import FastImage from 'react-native-fast-image';

import { SafeAreaWrapper } from '_app/components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '_app/utils/dimensions';

export const AvatarScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <SafeAreaWrapper center>
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
    </SafeAreaWrapper>
  );
};
