import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { ModalControl } from '_app/components';
import { s } from './styles';

const AddChooser = () => {
  return (
    <View style={s.container}>
      <ModalControl />
      <Text>Add chooser!</Text>
    </View>
  );
};

export const AddChooserScreen = observer(AddChooser);
