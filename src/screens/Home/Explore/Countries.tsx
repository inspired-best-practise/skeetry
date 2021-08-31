import React from 'react';
import { View } from 'react-native';

import { CardList } from '_app/components';
import { ListFilter } from '_app/components';

import { mockCountriesPopular } from './mocks/mockCountriesPopular';

export const CountriesScreen = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ paddingHorizontal: 4 }}>
        <ListFilter />
      </View>
      <CardList title="Popular" data={mockCountriesPopular} />
    </View>
  );
};
