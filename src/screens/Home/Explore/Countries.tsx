import { observer } from 'mobx-react';
import React from 'react';
import { ScrollView } from 'react-native';
import { CardList, CollectionList } from '_app/components';
import { mockDATA } from './mock';
import { mockCountriesForYou } from './mocks/mockCountriesForYou';
import { mockCountriesNearby } from './mocks/mockCountriesNearby';
import { mockCountriesPopular } from './mocks/mockCountriesPopular';

const Countries = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardList title="Popular" data={mockCountriesPopular} firstList />
      <CardList title="Nearby" data={mockCountriesNearby} />
      <CardList title="For you" data={mockCountriesForYou} />
      <CollectionList title="Collections" data={mockDATA} />
    </ScrollView>
  );
};

export const CountriesScreen = observer(Countries);
