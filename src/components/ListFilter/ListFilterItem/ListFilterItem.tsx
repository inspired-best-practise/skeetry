import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const ListFilterItem = ({ name, icon }: TListFilterItemProps) => {
  return (
    <TouchableHighlight style={s.filterItem} underlayColor="#DDDDDD" onPress={() => navigation.navigate('AddChooser')}>
      {icon ? icon : <Text style={s.filterItemTitle}>{name}</Text>}
    </TouchableHighlight>
  );
};
