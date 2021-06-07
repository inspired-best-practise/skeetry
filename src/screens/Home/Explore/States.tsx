import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { s } from './styles';

const States = () => {
  return (
    <ScrollView>
      <View style={s.container}>
        <Text>States!</Text>
      </View>
    </ScrollView>
  );
};

export const StatesScreen = observer(States);
