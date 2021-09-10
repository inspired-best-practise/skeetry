import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';

import { Categories } from '_app/components/Categories';
import { Nearby } from '_app/components/Nearby';
import { nearby, popular } from '_app/components/Nearby/nearby.mock';
import { Stories } from '_app/components/Stories';
import { colors, h3 } from '_app/constants';
import { authStore } from '_app/stores';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const user = authStore(state => state.user);

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ marginHorizontal: normalize(20), maxWidth: 300 }}>
          <Text style={[h3, { color: colors.primary600, marginTop: 10 }]}>
            {`${t('home:welcome')}`}, {user.username} 👋
          </Text>
        </View>
        <Stories />
        <Categories />

        {/* TODO: rename nearby component */}
        <Nearby title={`${t('home:nearby')}`} data={nearby} />
        <Nearby title={`${t('home:popular')}`} data={popular} />
      </ScrollView>
    </SafeAreaView>
  );
};
