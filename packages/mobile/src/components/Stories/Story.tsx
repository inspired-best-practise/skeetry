import React from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { colors } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const Story = ({ url, viewed }: TStoryProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[s.story, viewed && { borderColor: colors.gray200 }]}
      onPress={() => {
        navigation.navigate('Stories');
      }}
    >
      <FastImage
        style={s.storyImage}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};
