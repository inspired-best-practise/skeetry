import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { ScrollView, RefreshControl, FlatList } from 'react-native';
import { Card } from '_app/components';
import { LIST_FULL_SIZE } from '_app/constants';
import { wait } from '_app/utils';
import { mockDATA } from './mock';

const Places = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // TODO: type item when done
  const renderItem = ({ item }: any) => <Card id={item.id} title={item.title} imageUrl={item.imageUrl} />;

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <FlatList
        data={mockDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={LIST_FULL_SIZE}
        decelerationRate="fast"
      />
    </ScrollView>
  );
};

export const PlacesScreen = observer(Places);
