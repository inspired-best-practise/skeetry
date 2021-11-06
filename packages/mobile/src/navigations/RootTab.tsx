import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TRootStackParamList } from 'types';

import { useAuthState } from '_app/states';

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

  const { isLogined } = useAuthState();

  return (
    <RootTab.Navigator initialRouteName={isLogined ? 'HomeTab' : 'AuthStack'} screenOptions={screenOptions}>
      {!isLogined && <RootTab.Screen name="AuthStack" component={AuthStack} />}
      {isLogined && (
        <>
          <RootTab.Screen name="HomeTab" component={HomeTab} />
          {/* <RootTab.Screen name="Direct" component={Direct} /> */}
        </>
      )}
    </RootTab.Navigator>
  );
};

export default Index;
