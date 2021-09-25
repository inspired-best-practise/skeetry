import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';

import { colors, PLATFORM } from '_app/constants';
import { CardScreen, ProfileSettingsScreen } from '_app/screens/Main';
import { AddChooserScreen } from '_app/screens/Main/Add/AddChooser';
import { ItemsByTagScreen } from '_app/screens/Main/Home/ItemsByTag';
import { Offline } from '_app/screens/Others';
import { navigation, navigationRef } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

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
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: 'Поиск',
            presentation: 'formSheet',
          }}
          name="AddChooser"
          component={AddChooserScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.item.name} ${route.params.item.emoji}`,
            presentation: 'formSheet',
          })}
          name="ItemsByTag"
          component={ItemsByTagScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            presentation: 'fullScreenModal',
            title: '',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Animated.View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: normalize(6),
                    paddingHorizontal: normalize(6),
                  }}
                >
                  <Icon name="x" size={18} color={'black'} />
                </Animated.View>
              </TouchableWithoutFeedback>
            ),
          })}
          name="CardScreen"
          component={CardScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: 'Настройки',
            presentation: 'formSheet',
          }}
          name="ProfileSettings"
          component={ProfileSettingsScreen}
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
