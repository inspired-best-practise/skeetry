import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

import { s } from './styles';

export const WelcomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={s.container}>
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
    </View>
  );
};
