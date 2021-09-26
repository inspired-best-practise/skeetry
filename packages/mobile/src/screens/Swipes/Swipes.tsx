import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Stack } from '_app/components/Stack';

import { s } from './styles';

export const SwipesScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <Stack data={{}} />
    </SafeAreaView>
  );
};
