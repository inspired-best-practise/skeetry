import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView } from 'react-native';

import { Stories } from '_app/components/Stories';
import { colors, h4 } from '_app/constants';
import { authStore } from '_app/stores';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const user = authStore(state => state.user);

  return (
    <SafeAreaView style={s.container}>
      <Text style={[h4, { color: colors.primary600 }]}>
        {`${t('home:welcome')}`}, {user.username}
      </Text>
      <Stories />
    </SafeAreaView>
  );
};
