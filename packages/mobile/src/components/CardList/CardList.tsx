import React, { useState } from 'react';
import { RefreshControl, FlatList, View } from 'react-native';

import { Card } from '_app/components';
import { wait } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type item when done

export const CardList = ({ data, onEndReached }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Card item={item.node} size="full" />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={s.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.node.id}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        return onEndReached();
      }}
      decelerationRate="fast"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};
