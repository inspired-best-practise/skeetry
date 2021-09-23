import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OrderDirection, useMeQuery, useVisitedQuery, useWantedQuery } from '_app/generated/graphql';
import { profileStore } from '_app/stores';

import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const ProfileScreen = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const [refreshing, setRefreshing] = useState(false);

  const { loading, data, error, refetch } = useMeQuery();
  const {
    data: dataWanted,
    loading: loadingWanted,
    error: errorWanted,
    refetch: refetchWanted,
  } = useWantedQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });
  const {
    data: dataVisited,
    loading: loadingVisited,
    error: errorVisited,
    refetch: refetchVisited,
  } = useVisitedQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  const selected = profileStore(state => state.selected);
  const setSelected = profileStore(state => state.setSelected);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    selected === 'want' && refetchWanted();
    selected === 'visited' && refetchVisited();
    setRefreshing(false);
  }, [refetch, refetchWanted, refetchVisited, selected]);

  useScrollToTop(ref);

  if (loading || loadingWanted || loadingVisited) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error || errorWanted || errorVisited) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error. Please try later...</Text>
      </SafeAreaView>
    );
  }

  const user = data!.me;
  const wanted = dataWanted!.wanted.edges;
  const visited = dataVisited!.visited.edges;

  const getData = () => {
    switch (selected) {
      case 'want':
        return wanted;
      case 'visited':
        return visited;

      default:
        break;
    }
  };

  return (
    <>
      <View style={s.headerArea} />
      <FlatList
        ref={ref}
        refreshing={loadingWanted}
        ListHeaderComponent={renderHeader(user, t, setSelected)}
        ListEmptyComponent={renderEmpty}
        numColumns={2}
        horizontal={false}
        data={getData()}
        columnWrapperStyle={s.listWrapper}
        contentContainerStyle={{}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </>
  );
};
