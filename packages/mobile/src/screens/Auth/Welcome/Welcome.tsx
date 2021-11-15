import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity } from 'react-native';

import { SafeAreaWrapper } from '_app/components';

import { s } from './styles';

export const WelcomeScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaWrapper>
      <Text style={{ marginVertical: 20, textAlign: 'center' }}>{t('utils:welcome_to')} Skeetry</Text>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.6}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...s.btnLogin,
          opacity: 1,
        }}
      >
        <Text style={s.btnLoginText}>{t('utils:next')}</Text>
      </TouchableOpacity>
    </SafeAreaWrapper>
  );
};
