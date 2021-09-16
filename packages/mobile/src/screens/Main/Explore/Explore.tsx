import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-safe-area-context';

import ExploreTabs from '_app/navigations/ExploreTab';

export const ExploreScreen = () => {
  return (
    <>
      <SafeAreaView />
      <ExploreTabs />
    </>
  );
};
