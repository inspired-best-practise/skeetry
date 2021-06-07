import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Direct = () => {
  return (
    <View style={s.container}>
      <Text>Direct!</Text>
    </View>
  );
};

export const DirectScreen = observer(Direct);
