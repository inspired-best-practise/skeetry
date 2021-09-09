import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View } from 'react-native';

import { Categories } from '_app/components/Categories';
import { Stories } from '_app/components/Stories';
import { colors, h3, h4 } from '_app/constants';
import { authStore } from '_app/stores';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const user = authStore(state => state.user);

  return (
    <SafeAreaView style={s.container}>
      <View style={{ marginHorizontal: 20, maxWidth: 300 }}>
        <Text style={[h3, { color: colors.primary600, marginTop: 10 }]}>
          {`${t('home:welcome')}`}, {user.username} 👋
        </Text>
      </View>
      <Stories />
      <Categories />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={[h4, { color: colors.primary600 }]}>{`${t('home:nearby')}`}</Text>
      </View>
    </SafeAreaView>
  );
};
