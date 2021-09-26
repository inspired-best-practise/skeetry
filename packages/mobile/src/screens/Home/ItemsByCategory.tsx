import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardList, ModalControl, VerticalListSkeleton } from '_app/components';
import { PLATFORM, tTitle } from '_app/constants';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type route
export const ItemsByCategoryScreen = ({ route }) => {
  const { id, name, emoji, locale, localizations } = route.params.item;
  const [loadingCounter, setLoadingCount] = useState(0);
  const [cities, setCities] = useState();

  const { data, loading, fetchMore } = useCitiesQuery({
    variables: {
      input: {
        cityTagId: id,
      },
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!loading) {
      setLoadingCount(1);
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      setCities(data.cities.edges);
    }
  }, [data]);

  const handleEndReached = async () => {
    if (cities) {
      const lastCity = cities[cities.length - 1].node.id;
      const newData = await fetchMore({
        variables: {
          input: {
            cityTagId: id,
          },
          after: lastCity,
          first: 10,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setCities(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  // TODO: add wrapper for formSheet screens with StatusBar and ModalControl
  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}
      {PLATFORM.IS_IOS && (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={tTitle}>{withLocalization('name', name, locale, localizations)}</Text>
          <View style={{ marginLeft: 5 }}>
            <Text>{emoji}</Text>
          </View>
        </View>
      )}
      <View>
        {loadingCounter === 0 && <VerticalListSkeleton />}
        {loadingCounter > 0 && <CardList data={cities} onEndReached={handleEndReached} />}
      </View>
    </SafeAreaView>
  );
};