import React, { useState } from 'react';
import { RefreshControl, FlatList, View } from 'react-native';
import { observer } from 'mobx-react';
// import { LIST_FULL_SIZE } from '_app/constants';
import { wait } from '_app/utils';
import { Card } from '_app/components';

// TODO: type item when done

export const List = ({ title, data }): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }: any) => <Card item={item} />;

  return (
    <View>
      {/* <Text style={s.cardListTitle}>{title}</Text> */}
      <FlatList
        contentContainerStyle={{ padding: 18 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        // snapToInterval={LIST_FULL_SIZE}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

export const CardList = observer(List);
