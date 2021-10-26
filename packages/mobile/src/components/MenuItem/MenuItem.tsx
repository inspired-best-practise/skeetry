import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, View, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { colors, tBase } from '_app/constants';

import { s } from './styles';

const MenuItem = ({ name, icon }: MenuItemProps) => {
  const { t } = useTranslation();

  return (
    <TouchableHighlight underlayColor={colors.lineGray} onPress={() => Alert.alert(t('utils:wip'))} style={s.menuItem}>
      <View style={s.container}>
        <View style={s.wrap}>
          <Icon name={icon} size={22} color={colors.black} />
          <Text style={[tBase, s.menuItemText]}>{t(`settings:${name}`)}</Text>
        </View>
        <Icon name="chevron-right" size={18} color={colors.black} />
      </View>
    </TouchableHighlight>
  );
};

export default MenuItem;
