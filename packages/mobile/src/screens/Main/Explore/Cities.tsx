import React from 'react';
import { View } from 'react-native';

import {
  // CardList,
  ListFilter,
} from '_app/components';

export const CitiesScreen = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <ListFilter />
      {/* <CardList title="Popular" data={mockCountriesPopular} /> */}
    </View>
  );
};
