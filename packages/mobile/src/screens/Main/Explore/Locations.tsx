import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

import { HorizontalCardList } from '_app/components';
import { OrderDirection, usePopularQuery } from '_app/generated/graphql';

export const LocationsScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  const [popular, setPopular] = useState();

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
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataPopular) {
      setPopular(dataPopular.popular.edges);
    }
  }, [dataPopular]);

  useScrollToTop(ref);

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

  return (
    <ScrollView ref={ref} overScrollMode="never" showsVerticalScrollIndicator={false} scrollsToTop={true}>
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:popular')}`}
          data={popular}
          size="wide"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:forYou')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:europe')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:asia')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:australia')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:antarctica')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:north_america')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:south_america')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
      {!errorPopular && (
        <HorizontalCardList
          title={`${t('explore:africa')}`}
          data={popular}
          size="small"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
        />
      )}
    </ScrollView>
  );
};
