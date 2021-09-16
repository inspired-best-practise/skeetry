import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';

import { HorizontalCardList } from '_app/components';
import { Categories } from '_app/components/Categories';
import { Stories } from '_app/components/Stories';
import { tTitle } from '_app/constants';
import { useNearbyQuery, usePopularQuery } from '_app/generated/graphql';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const { data: dataNearby, loading: loadingNearby, error: errorNearby } = useNearbyQuery();
  const { data: dataPopular, loading: loadingPopular, error: errorPopular } = usePopularQuery();

  const nearby = dataNearby?.nearby;
  const popular = dataPopular?.popular;

  console.log('nearby', nearby);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={tTitle}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.main}>
        <Stories />
        <Categories />
        {!loadingNearby && !errorNearby && <HorizontalCardList title={`${t('home:nearby')}`} data={nearby} />}
        {!loadingPopular && !errorPopular && <HorizontalCardList title={`${t('home:popular')}`} data={popular} />}
      </ScrollView>
    </SafeAreaView>
  );
};
