import React, { useState } from 'react';
import { ScrollView, RefreshControl, FlatList, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { LIST_FULL_SIZE, LIST_FULL_SIZE_SMALL } from '_app/constants';
import { wait } from '_app/utils';
import { Card } from '_app/components';

import { s } from './styles';

// TODO: type item when done

export const List = ({ title, data, firstList = false }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => <Card item={item} size={firstList ? 'default' : 'small'} />;

  return (
    <View>
      <Text style={s.cardListTitle}>{title}</Text>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <FlatList
          contentContainerStyle={{ padding: 12 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={firstList ? LIST_FULL_SIZE : LIST_FULL_SIZE_SMALL}
          decelerationRate="fast"
        />
      </ScrollView>
    </View>
  );
};

export const CardList = observer(List);
