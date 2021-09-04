import React from 'react';
import { View } from 'react-native';

import { CardList } from '_app/components';
import { ListFilter } from '_app/components';
import { useCountriesQuery } from '_app/generated/graphql';

// import { mockCountriesPopular } from './mocks/mockCountriesPopular';

export const CountriesScreen = () => {
  const { data, loading, error } = useCountriesQuery();

  console.log('error', error);

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ paddingHorizontal: 4 }}>
        <ListFilter />
      </View>
      <CardList title="Popular" loading={loading} data={data?.countries} />
    </View>
  );
};
