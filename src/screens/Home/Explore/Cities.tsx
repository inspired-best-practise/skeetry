import { observer } from 'mobx-react';
import React from 'react';
import { View } from 'react-native';
import { CardList, ListFilter } from '_app/components';
import { mockCountriesPopular } from './mocks/mockCountriesPopular';

const Cities = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <ListFilter />
      <CardList title="Popular" data={mockCountriesPopular} />
    </View>
  );
};

export const CitiesScreen = observer(Cities);
