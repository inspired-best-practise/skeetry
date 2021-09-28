import React from 'react';
import FastImage from 'react-native-fast-image';

import { s } from './styles';

export const Avatar = ({ src, nickname }: TAvatarProps) => {
  // TODO: own function
  const placeholderImageMock = `https://eu.ui-avatars.com/api/?length=1&name=${nickname}`;

  if (!src) {
    return (
      <FastImage
        style={s.avatarImage}
        source={{
          uri: placeholderImageMock,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }

  const image = `data:image/png;base64,${src}`;

  return (
    <FastImage
      style={s.avatarImage}
      source={{ uri: image, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};
