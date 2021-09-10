import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { colors } from '_app/constants';
import { profileStore } from '_app/stores';

import { s } from './styles';

export const AccountFilterItem = ({ selected, name, title, icon }: TListFilterItemProps) => {
  const setSelected = profileStore(state => state.setSelected);

  // TODO: fix onPress and long press color
  return (
    <TouchableHighlight
      onPress={() => setSelected(name)}
      style={[s.filterItem, selected === name && { backgroundColor: colors.gray900 }]}
    >
      {icon ? icon : <Text style={[s.filterItemTitle, selected === name && { color: colors.gray50 }]}>{title}</Text>}
    </TouchableHighlight>
  );
};
