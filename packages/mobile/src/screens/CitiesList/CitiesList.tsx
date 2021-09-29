import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ModalControl, VerticalListSkeleton, CardList } from '_app/components';
import { PLATFORM, tTitle } from '_app/constants';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';

import { s } from './styles';

export const CitiesListScreen = ({ route }) => {
  const { name, type } = route.params.item;
  const [loadingCounter, setLoadingCount] = useState(0);
  const [cities, setCities] = useState([]);

  const { data, loading, fetchMore } = useCitiesQuery({
    variables: {
      first: 10,
      skip: 1,
      orderBy: {
        direction: OrderDirection.Asc,
      },
      continent: type !== 'capital' && type !== 'popular' ? type.toUpperCase() : null,
      isCapital: type === 'capital' && type !== 'popular' ? true : null,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (!loading) {
      setLoadingCount(1);
    }
  }, [loading]);

  useEffect(() => {
    if (data && cities.length === 0) {
      setCities(data.cities.edges);
    }
  }, [data]);

  const handleEndReached = async () => {
    if (cities) {
      const lastCity = cities[cities.length - 1].node.id;
      const newData = await fetchMore({
        variables: {
          first: 10,
          after: lastCity,
          orderBy: {
            direction: OrderDirection.Asc,
          },
          continent: type !== 'capital' && type !== 'popular' ? type.toUpperCase() : null,
          isCapital: type === 'capital' && type !== 'popular' ? true : null,
        },
      });
      setCities(prevState => [...prevState, ...newData.data.cities.edges]);
    }
  };

  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}
      {PLATFORM.IS_IOS && (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={tTitle}>{name}</Text>
        </View>
      )}
      <View>
        {loadingCounter === 0 && <VerticalListSkeleton />}
        {loadingCounter > 0 && <CardList data={cities} onEndReached={handleEndReached} />}
      </View>
    </SafeAreaView>
  );
};
