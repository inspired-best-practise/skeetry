import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { navigationRef } from '_app/services/navigations';
import RootTab from './RootTab';

// TODO: type when done
const RootStack = createStackNavigator();

const index = (): JSX.Element => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="RootTab" screenOptions={navigationOptions}>
        <RootStack.Screen name="RootTab" component={RootTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default index;
