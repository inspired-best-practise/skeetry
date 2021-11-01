import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar } from '_app/components';
import { tBase, whiteColor } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const UserWithRating = ({ item, index }: UserWithRatingProps) => {
  const theme = useColorScheme();

  const { node } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.push('ProfileUser', {
          user: node,
        })
      }
    >
      <View style={s.container}>
        <View style={s.wrap}>
          <Text style={[tBase, s.number, theme === 'dark' && whiteColor]}>{index + 1}</Text>
          <Avatar small username={node.username} src={node.avatar} />
          <View style={s.credentials}>
            <Text style={[tBase, theme === 'dark' && whiteColor]}>{node.name}</Text>
            <Text style={[tBase, theme === 'dark' && whiteColor]}>@{node.username}</Text>
          </View>
        </View>
        <Text style={[tBase, theme === 'dark' && whiteColor]}>{node.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};
