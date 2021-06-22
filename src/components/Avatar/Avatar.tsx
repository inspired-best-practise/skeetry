import { observer } from 'mobx-react';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { s } from './styles';

const CAvatar = ({ src, nickname }: TAvatarProps) => {
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
  return (
    <FastImage
      style={s.avatarImage}
      source={{ uri: src, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export const Avatar = observer(CAvatar);
