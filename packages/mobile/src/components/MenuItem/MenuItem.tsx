import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, View, Text, Alert, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors, darkColor, tBase, whiteColor } from '_app/constants';

import { s } from './styles';

const MenuItem = ({ name, icon }: MenuItemProps) => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  return (
    <TouchableHighlight
      underlayColor={theme === 'dark' ? colors.gray800 : colors.lineGray}
      onPress={() => Alert.alert(t('utils:wip'))}
      style={s.menuItem}
    >
      <View style={s.container}>
        <View style={s.wrap}>
          <Icon name={icon} size={22} color={theme === 'dark' ? colors.white : colors.black} />
          <Text style={[tBase, s.menuItemText, theme === 'dark' ? whiteColor : darkColor]}>
            {t(`settings:${name}`)}
          </Text>
        </View>
        <Icon name="chevron-right" size={18} color={theme === 'dark' ? colors.white : colors.black} />
      </View>
    </TouchableHighlight>
  );
};

export default MenuItem;
