import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const HomeIndex = () => {
  return (
    <View style={s.container}>
      <Text>Home!</Text>
    </View>
  );
};

export const HomeIndexScreen = observer(HomeIndex);
