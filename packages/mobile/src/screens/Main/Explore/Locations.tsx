import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HorizontalCardList } from '_app/components';
import { usePopularQuery } from '_app/generated/graphql';

export const LocationsScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);

  const { data: dataPopular, loading: loadingPopular, error: errorPopular } = usePopularQuery();

  useScrollToTop(ref);

  if (loadingPopular) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const popular = dataPopular?.popular;

  return (
    <ScrollView ref={ref} showsVerticalScrollIndicator={false} scrollsToTop={true}>
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:popular')}`} data={popular} size="wide" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:forYou')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:europe')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:asia')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:australia')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:antarctica')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:north_america')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:south_america')}`} data={popular} size="small" />
      )}
      {!loadingPopular && !errorPopular && (
        <HorizontalCardList title={`${t('explore:africa')}`} data={popular} size="small" />
      )}
    </ScrollView>
  );
};
