import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Activity = () => {
  return (
    <View style={s.container}>
      <Text>Activity!</Text>
    </View>
  );
};

export const ActivityScreen = observer(Activity);
