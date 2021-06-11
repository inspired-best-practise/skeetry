import { observer } from 'mobx-react';
import React from 'react';
import { ScrollView } from 'react-native';
import { CardList } from '_app/components';
import { mockDATA } from './mock';

const Cities = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardList title="Popular" data={mockDATA} firstList />
      <CardList title="For you" data={mockDATA} />
    </ScrollView>
  );
};

export const CitiesScreen = observer(Cities);
