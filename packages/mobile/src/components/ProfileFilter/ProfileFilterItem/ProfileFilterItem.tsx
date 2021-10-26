import React from 'react';
import { TouchableHighlight, Text, useColorScheme } from 'react-native';

import { colors } from '_app/constants';
import { profileStore } from '_app/stores';

import { s } from './styles';

export const ProfileFilterItem = ({ selected, name, title, icon }: TListFilterItemProps) => {
  const setSelected = profileStore(state => state.setSelected);
  const theme = useColorScheme();

  return (
    <TouchableHighlight
      onPress={() => setSelected(name)}
      style={[
        s.filterItem,
        theme === 'dark' && { backgroundColor: colors.gray900 },
        selected === name && { backgroundColor: theme === 'dark' ? colors.gray700 : colors.gray900 },
      ]}
      underlayColor={
        selected === name
          ? theme === 'dark'
            ? colors.gray700
            : colors.gray900
          : theme === 'dark'
          ? colors.gray700
          : colors.gray100
      }
    >
      {icon ? (
        icon
      ) : (
        <Text
          style={[
            s.filterItemTitle,
            theme === 'dark' && { color: colors.white },
            selected === name && { color: theme === 'dark' ? colors.white : colors.gray50 },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};
