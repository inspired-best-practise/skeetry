import React, { useState } from 'react';
import { RefreshControl, FlatList, View, Text } from 'react-native';

import { Card } from '_app/components';
import { wait } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type item when done

export const CardList = ({ data, loading }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={{ marginBottom: 20 }}>
      <Card item={item} size="full" />
    </View>
  );

  return !loading ? (
    <FlatList
      contentContainerStyle={s.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  ) : (
    <View style={{ marginHorizontal: 20 }}>
      <Text>Loading...</Text>
    </View>
  );
};
