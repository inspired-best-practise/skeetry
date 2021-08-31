import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';

import HomeTab from './HomeTab';

const RootTab = createMaterialTopTabNavigator<rootStackParamList>();

const index = (): JSX.Element => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarIndicatorContainerStyle: {
      display: 'none',
    },
    tabBarStyle: {
      display: 'none',
    },
  };

  return (
    <RootTab.Navigator initialRouteName="HomeTab" screenOptions={screenOptions}>
      <RootTab.Screen name="HomeTab" component={HomeTab} />
    </RootTab.Navigator>
  );
};
export default index;
