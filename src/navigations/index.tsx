import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator, NativeStackNavigationOptions } from 'react-native-screens/native-stack';
import React from 'react';
import { navigationRef } from '_app/services/navigations';
import RootTab from './RootTab';
import { AddChooserScreen } from '_app/screens/Home/Add/AddChooser';

// TODO: type when done
const RootStack = createNativeStackNavigator();

const index = (): JSX.Element => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="RootTab">
        <RootStack.Screen name="Root Tab" component={RootTab} options={navigationOptions} />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            stackPresentation: 'formSheet',
          }}
          name="AddChooser"
          component={AddChooserScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default index;
