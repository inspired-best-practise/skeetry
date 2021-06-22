import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ModalControl } from '_app/components';
import { s } from './styles';

const AddChooser = () => {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />
      <Text>Add chooser!</Text>
    </View>
  );
};

export const AddChooserScreen = observer(AddChooser);
