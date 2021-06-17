import { observer } from 'mobx-react';
import React from 'react';
import { CardList } from '_app/components';
import { mockCountriesPopular } from './mocks/mockCountriesPopular';

const Places = () => {
  return <CardList title="Popular" data={mockCountriesPopular} />;
};

export const PlacesScreen = observer(Places);
