import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, Text, Alert, useColorScheme } from 'react-native';

import { colors, darkBg, darkColor, whiteBg, whiteColor } from '_app/constants';

import { s } from './styles';

export const Button = ({ title, primary, small }: TButtonProps) => {
  const theme = useColorScheme();
  const { t } = useTranslation();

  return (
    <TouchableHighlight
      style={[
        s.button,
        primary ? darkBg : whiteBg,
        primary && { width: 130 },
        small && s.small,
        theme === 'dark' ? { backgroundColor: colors.gray600 } : darkBg,
      ]}
      underlayColor={
        primary
          ? theme === 'dark'
            ? colors.gray800
            : colors.gray800
          : theme === 'dark'
          ? colors.gray800
          : colors.mainGray
      }
      onPress={() => Alert.alert(t('utils:wip'))}
    >
      <Text style={[s.buttonTitle, primary ? whiteColor : darkColor, theme === 'dark' && whiteColor]}>{title}</Text>
    </TouchableHighlight>
  );
};
