import React from 'react';
import { TouchableHighlight, Text, Pressable } from 'react-native';

import { s } from './styles';

export const AccountFilterItem = ({ name, icon }: TListFilterItemProps) => {
  return (
    <Pressable>
      <TouchableHighlight style={s.filterItem} underlayColor="#DDDDDD" onPress={() => {}}>
        {icon ? icon : <Text style={s.filterItemTitle}>{name}</Text>}
      </TouchableHighlight>
    </Pressable>
  );
};
