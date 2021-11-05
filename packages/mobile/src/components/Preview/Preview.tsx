import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Linking, useColorScheme } from 'react-native';

import { colorsDark, whiteColor } from '_app/constants';

import { s } from './styles';

export const Preview = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  return (
    <View style={[s.container, theme === 'dark' && { backgroundColor: colorsDark.black }]}>
      <Text style={[s.title, theme === 'dark' && whiteColor]}>{t('utils:about_early_access')}</Text>
      <Text style={[s.paragraph, theme === 'dark' && whiteColor]}>
        <Text style={s.semibold}>Skeetry</Text>
        {t('utils:about_early_access_1')}
      </Text>
      <Text style={[s.paragraph, theme === 'dark' && whiteColor]}>{t('utils:about_early_access_2')}</Text>
      <Text style={[s.paragraph, theme === 'dark' && whiteColor]}>
        {t('utils:about_early_access_3')}
        <Text style={s.semibold} onPress={() => Linking.openURL('https://t.me/alekseytsvetkov')}>
          @alekseytsvetkov
        </Text>
      </Text>
    </View>
  );
};
