import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { colors } from '_app/constants';

import { s } from './styles';

export const Story = ({ url, viewed }: TStoryProps) => {
  return (
    <View style={[s.story, viewed && { borderWidth: 1, borderColor: colors.primary200 }]}>
      <FastImage
        style={s.storyImage}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};
