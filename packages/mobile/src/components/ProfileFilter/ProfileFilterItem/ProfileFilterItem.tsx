import React, { useContext } from 'react';
import { TouchableHighlight, Text, useColorScheme } from 'react-native';

import { colors } from '_app/constants';
import { AppContext } from '_app/context';

import { s } from './styles';

export const ProfileFilterItem = ({ selected, name, title, icon }: TListFilterItemProps) => {
  const scheme = useColorScheme();
  const { selectList } = useContext(AppContext);

  return (
    <TouchableHighlight
      onPress={() => selectList(name)}
      style={[
        s.filterItem,
        scheme === 'dark' && { backgroundColor: colors.gray900 },
        selected === name && { backgroundColor: scheme === 'dark' ? colors.gray700 : colors.gray900 },
      ]}
      underlayColor={
        selected === name
          ? scheme === 'dark'
            ? colors.gray700
            : colors.gray900
          : scheme === 'dark'
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
            scheme === 'dark' && { color: colors.white },
            selected === name && { color: scheme === 'dark' ? colors.white : colors.gray50 },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
};
