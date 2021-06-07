import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Add = () => {
  return (
    <View style={s.container}>
      <Text>Add!</Text>
    </View>
  );
};

export const AddScreen = observer(Add);
