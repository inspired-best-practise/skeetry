import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
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
  const [popular, setPopular] = useState([]);

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
    fetchMore: fetchMorePopular,
  } = usePopularQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  useEffect(() => {
    if (dataPopular) {
      setPopular(dataPopular.popular.edges);
    }
  }, [dataPopular]);

  const nearby = dataNearby?.nearby.edges;

  const handleEndReached = async () => {
    if (popular) {
      const lastPopular = popular[popular.length - 1].node.id;
      const newData = await fetchMorePopular({
        variables: {
          first: 10,
          after: lastPopular,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setPopular(prevState => [...prevState, ...newData.data.popular.edges]);
    }
  };

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
          <HorizontalCardList
            title={`${t('home:popular')}`}
            data={popular}
            size="wide"
            handleEndReached={handleEndReached}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
