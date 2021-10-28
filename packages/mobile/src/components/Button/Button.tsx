import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, Text, Alert, useColorScheme } from 'react-native';

import { colors, darkBg, darkColor, whiteBg, whiteColor } from '_app/constants';

import { s } from './styles';

export const Button = ({ title, small }: TButtonProps) => {
  const theme = useColorScheme();
  const { t } = useTranslation();

  console.log('theme', theme);

  return (
    <TouchableHighlight
      style={[s.button, small && s.small, theme === 'dark' ? { backgroundColor: colors.gray600 } : darkBg]}
      underlayColor={theme === 'dark' ? colors.gray800 : colors.gray800}
      onPress={() => Alert.alert(t('utils:wip'))}
    >
      <Text style={[s.buttonTitle, theme === 'dark' ? darkColor : whiteColor]}>{title}</Text>
    </TouchableHighlight>
  );
};
