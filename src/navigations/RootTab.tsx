import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { rootStackParamList } from 'declarations';
import React from 'react';
import { DirectScreen } from '_app/screens/Others';
import AuthStack from './AuthStack';
import HomeTab from './HomeTab';

const RootTab = createMaterialTopTabNavigator<rootStackParamList>();

const index = (): JSX.Element => {
  const navigationOptions: MaterialTopTabNavigationOptions = {};
  const tabBarOptions: MaterialTopTabBarOptions = {
    indicatorContainerStyle: {
      display: 'none',
    },
    tabStyle: {
      display: 'none',
    },
  };

  // in the future we will take this from store
  const logined = true;
  return (
    <RootTab.Navigator
      initialRouteName={logined ? 'HomeTab' : 'AuthStack'}
      screenOptions={navigationOptions}
      tabBarOptions={tabBarOptions}
    >
      {!logined && <RootTab.Screen name="AuthStack" component={AuthStack} />}
      {logined && (
        <>
          <RootTab.Screen name="HomeTab" component={HomeTab} />
          <RootTab.Screen name="Direct" component={DirectScreen} />
        </>
      )}
    </RootTab.Navigator>
  );
};
export default index;
