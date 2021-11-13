import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TRootStackParamList } from 'types';

import AuthStack from './AuthStack';
import HomeTab from './HomeTab';

const RootTab = createMaterialTopTabNavigator<TRootStackParamList>();

const Index = (): JSX.Element => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarIndicatorContainerStyle: {
      display: 'none',
    },
    tabBarStyle: {
      display: 'none',
    },
  };

  return (
    <RootTab.Navigator initialRouteName="AuthStack" screenOptions={screenOptions}>
      <RootTab.Screen name="AuthStack" component={AuthStack} />
      <RootTab.Screen name="HomeTab" component={HomeTab} />
      {/* <RootTab.Screen name="Direct" component={Direct} />  */}
    </RootTab.Navigator>
  );
};

export default Index;
