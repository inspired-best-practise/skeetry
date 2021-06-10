import { observer } from 'mobx-react';
import React from 'react';
import { ScrollView } from 'react-native';
import { CardList, CollectionList } from '_app/components';
import { mockDATA } from './mock';

const Places = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardList title="Recommended" data={mockDATA} firstList />
      <CardList title="For you" data={mockDATA} />
      <CollectionList title="Collections" data={mockDATA} />
    </ScrollView>
  );
};

export const PlacesScreen = observer(Places);
