import { observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { CardList } from '_app/components';
import { mockCountriesPopular } from './mocks/mockCountriesPopular';

const Countries = () => {
  return (
    <>
      <SafeAreaView />
      <CardList title="Popular" data={mockCountriesPopular} />
    </>
  );
};

export const CountriesScreen = observer(Countries);
