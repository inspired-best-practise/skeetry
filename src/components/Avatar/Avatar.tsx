import React from 'react';
import FastImage from 'react-native-fast-image';

import { s } from './styles';

export const Avatar = ({ src, nickname }: TAvatarProps) => {
  const placeholderImageMock = `https://eu.ui-avatars.com/api/?length=1&name=${nickname}`;

  console.log('src', src);

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

  return (
    <FastImage
      style={s.avatarImage}
      source={{ uri: src, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};
