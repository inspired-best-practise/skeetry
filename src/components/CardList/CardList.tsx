import React, { useState } from 'react';
import { RefreshControl, FlatList } from 'react-native';

import { Card } from '_app/components';
import { wait } from '_app/utils';

import { s } from './styles';

// TODO: type item when done

export const CardList = ({ title, data }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => <Card item={item} />;

  return (
    <FlatList
      contentContainerStyle={s.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};
