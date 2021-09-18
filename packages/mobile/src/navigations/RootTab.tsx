import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TRootStackParamList } from 'types';

import { authStore } from '_app/stores';

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

  const logined = authStore(state => state.isAuthenticated);

  return (
    <RootTab.Navigator initialRouteName={logined ? 'HomeTab' : 'AuthStack'} screenOptions={screenOptions}>
      {!logined && <RootTab.Screen name="AuthStack" component={AuthStack} />}
      {logined && (
        <>
          <RootTab.Screen name="HomeTab" component={HomeTab} />
          {/* <RootTab.Screen name="Direct" component={Direct} /> */}
        </>
      )}
    </RootTab.Navigator>
  );
};

export default Index;
