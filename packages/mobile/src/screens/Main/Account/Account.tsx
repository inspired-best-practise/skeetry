import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMeQuery, useWantedQuery } from '_app/generated/graphql';
import { wait } from '_app/utils/helpers';

import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const AccountScreen = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, error, refetch } = useMeQuery();
  const { data: dataWanted, loading: loadingWanted, error: errorWanted } = useWantedQuery();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    wait(500).then(() => setRefreshing(false));
  }, [refetch]);

  useScrollToTop(ref);

  if (loading || loadingWanted) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error || errorWanted) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: {error ? error.message : errorWanted?.message}. Try later...</Text>
      </SafeAreaView>
    );
  }

  const user = data!.me;
  const wanted = dataWanted!.wanted;

  return (
    <>
      <View style={{ height: 45, backgroundColor: '#fff' }} />
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader(user, t)}
        ListEmptyComponent={renderEmpty}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100, marginTop: 10 }}
        columnWrapperStyle={s.cardList}
        data={wanted}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </>
  );
};
