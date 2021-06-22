import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';
import { h4 } from '_app/constants';

const HomeIndex = () => {
  return (
    <View style={s.container}>
      <Text style={h4}>Home!</Text>
    </View>
  );
};

export const HomeIndexScreen = observer(HomeIndex);
