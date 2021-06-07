import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { ScrollView, View, Text, RefreshControl } from 'react-native';
import { wait } from '_app/utils';
import { s } from './styles';

const Places = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={s.container}>
        <Text>Places!</Text>
      </View>
    </ScrollView>
  );
};

export const PlacesScreen = observer(Places);
