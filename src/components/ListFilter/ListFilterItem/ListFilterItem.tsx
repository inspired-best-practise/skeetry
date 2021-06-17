import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { s } from './styles';
import { navigation } from '_app/services/navigations';

export const ListFilterItem = ({ name, icon }: ListFilterItemProps) => {
  return (
    <Pressable onPress={() => navigation.navigate('AddChooser')}>
      <View style={s.filterItem}>{icon ? icon : <Text style={s.filterItemTitle}>{name}</Text>}</View>
    </Pressable>
  );
};
