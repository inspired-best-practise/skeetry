import { observer } from 'mobx-react';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { s } from './styles';

const Places = () => {
  return (
    <ScrollView>
      <View style={s.container}>
        <Text>Places!</Text>
      </View>
    </ScrollView>
  );
};

export const PlacesScreen = observer(Places);
