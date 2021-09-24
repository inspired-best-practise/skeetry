import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HorizontalCardList } from '_app/components';
import { Categories } from '_app/components/Categories';
import { Stories } from '_app/components/Stories';
import { tTitle } from '_app/constants';
import { OrderDirection, useNearbyQuery, usePopularQuery } from '_app/generated/graphql';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  const [nearby, setNearby] = useState();
  const [popular, setPopular] = useState();

  useScrollToTop(ref);

  const {
    data: dataNearby,
    loading: loadingNearby,
    error: errorNearby,
    fetchMore: fetchMoreNearby,
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

  useEffect(() => {
    if (dataNearby) {
      setNearby(dataNearby.nearby.edges);
    }
  }, [dataNearby]);

  const nearbyEndReached = async () => {
    if (nearby) {
      const lastNearby = nearby[nearby.length - 1].node.id;
      const newData = await fetchMoreNearby({
        variables: {
          first: 10,
          after: lastNearby,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setNearby(prevState => [...prevState, ...newData.data.nearby.edges]);
    }
  };

  const popularEndReached = async () => {
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

  console.log('loadingPopular', loadingPopular);
  console.log('loadingNearby', loadingNearby);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={tTitle}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.main} ref={ref} scrollsToTop={true}>
        <Stories />
        <Categories />
        {!loadingNearby && !errorNearby && (
          <HorizontalCardList
            title={`${t('home:nearby')}`}
            data={nearby}
            size="wide"
            handleEndReached={nearbyEndReached}
            loading={loadingNearby}
          />
        )}
        {!loadingPopular && !errorPopular && (
          <HorizontalCardList
            title={`${t('home:popular')}`}
            data={popular}
            size="wide"
            handleEndReached={popularEndReached}
            loading={loadingPopular}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
