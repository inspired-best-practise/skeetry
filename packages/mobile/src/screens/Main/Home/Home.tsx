import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';

import { HorizontalCardList } from '_app/components';
import { Categories } from '_app/components/Categories';
import { Stories } from '_app/components/Stories';
import { tTitle } from '_app/constants';
import { OrderDirection, useNearbyQuery, usePopularQuery } from '_app/generated/graphql';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);

  useScrollToTop(ref);

  const {
    data: dataNearby,
    loading: loadingNearby,
    error: errorNearby,
  } = useNearbyQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });
  const {
    data: dataPopular,
    loading: loadingPopular,
    error: errorPopular,
  } = usePopularQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  const nearby = dataNearby?.nearby;
  const popular = dataPopular?.popular;

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={tTitle}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.main} ref={ref} scrollsToTop={true}>
        <Stories />
        <Categories />
        {!loadingNearby && !errorNearby && (
          <HorizontalCardList title={`${t('home:nearby')}`} data={nearby} size="wide" />
        )}
        {!loadingPopular && !errorPopular && (
          <HorizontalCardList title={`${t('home:popular')}`} data={popular} size="wide" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
