import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { s } from './styles';

const Countries = () => {
  return (
    <ScrollView>
      <View style={s.container}>
        <Text>Countries!</Text>
      </View>
    </ScrollView>
  );
};

export const CountriesScreen = observer(Countries);
