import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';

import { AccountSettingsScreen } from '_app/screens/Main';
import { AddChooserScreen } from '_app/screens/Main/Add/AddChooser';
import { ItemTagDetailScreen } from '_app/screens/Main/Home/ItemTags';
import { Offline } from '_app/screens/Others';
import { navigationRef } from '_app/services/navigations';

import RootTab from './RootTab';

enableScreens();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

// TODO: type when done
const RootStack = createNativeStackNavigator();

const Index = (): JSX.Element => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <RootStack.Navigator initialRouteName="RootTab">
        <RootStack.Screen name="Root Tab" component={RootTab} options={navigationOptions} />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: false,
            presentation: 'formSheet',
          }}
          name="AddChooser"
          component={AddChooserScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: false,
            presentation: 'formSheet',
          }}
          name="ItemTagDetail"
          component={ItemTagDetailScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: false,
            presentation: 'formSheet',
          }}
          name="AccountSettings"
          component={AccountSettingsScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: false,
            presentation: 'card',
          }}
          name="Offline"
          component={Offline}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
