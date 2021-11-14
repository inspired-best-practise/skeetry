import React, { useContext } from 'react';
import { useColorScheme } from 'react-native';
import FastImage from 'react-native-fast-image';

import { AppContext } from '_app/context';

import { s } from './styles';

export const Avatar = ({ src, username, small }: TAvatarProps) => {
  const { theme } = useContext(AppContext);

  const background = theme.gray01.split('#')[1];
  const color = theme.text01.split('#')[1];

  // TODO: own function
  const placeholderImageMock = `https://eu.ui-avatars.com/api/?background=${background}&color=${color}&length=1&name=${username}`;

  if (!src) {
    return (
      <FastImage
        style={[s.avatarImage, small && { width: 50, height: 50 }]}
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
      style={[s.avatarImage, small && { width: 50, height: 50 }]}
      source={{ uri: src, priority: FastImage.priority.normal }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};
