import React from 'react';
import { SafeAreaView } from 'react-native';

import { nearby } from '_app/components/Nearby/nearby.mock';
import { Stack } from '_app/components/Stack';

import { s } from './styles';

export const SwipesScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <Stack data={nearby} />
    </SafeAreaView>
  );
};
