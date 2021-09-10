import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { colors } from '_app/constants';
import { profileStore } from '_app/stores';

import { s } from './styles';

export const AccountFilterItem = ({ selected, name, title, icon }: TListFilterItemProps) => {
  const setSelected = profileStore(state => state.setSelected);

  return (
    <TouchableHighlight
      onPress={() => setSelected(name)}
      style={[s.filterItem, selected === name && { backgroundColor: colors.gray900 }]}
      underlayColor={selected === name ? colors.gray900 : colors.gray100}
    >
      {icon ? icon : <Text style={[s.filterItemTitle, selected === name && { color: colors.gray50 }]}>{title}</Text>}
    </TouchableHighlight>
  );
};
