import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { wait } from '_app/utils';
import { s } from './styles';

const Cities = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={s.container}>
        <Text>Countries!</Text>
      </View>
    </ScrollView>
  );
};

export const CitiesScreen = observer(Cities);
