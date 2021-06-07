import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Explore = () => {
  return (
    <View style={s.container}>
      <Text>Explore!</Text>
    </View>
  );
};

export const ExploreScreen = observer(Explore);
