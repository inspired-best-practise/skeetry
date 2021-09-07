import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, RefreshControl, SafeAreaView } from 'react-native';

import { useMeQuery } from '_app/generated/graphql';
import { authStore } from '_app/stores';
import { wait } from '_app/utils/helpers';

import { mockCountriesPopular } from '../Explore/mocks/mockCountriesPopular';
import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const AccountScreen = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, error, refetch } = useMeQuery({ fetchPolicy: 'no-cache' });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    wait(500).then(() => setRefreshing(false));
  }, [refetch]);

  const setLogout = authStore(state => state.setLogout);

  useScrollToTop(ref);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: {error.message}. Try later...</Text>
      </SafeAreaView>
    );
  }

  const user = data!.me;

  return (
    <>
      <View style={{ height: 45, backgroundColor: '#fff' }} />
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader(user, setLogout, t)}
        ListEmptyComponent={renderEmpty}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100, marginTop: 10 }}
        columnWrapperStyle={s.cardList}
        data={mockCountriesPopular}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </>
  );
};
