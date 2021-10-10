import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { Animated, TouchableWithoutFeedback, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';

import { colors, darkTheme, lightTheme, PLATFORM } from '_app/constants';
import {
  CardScreen,
  ProfileSettingsScreen,
  AddChooserScreen,
  ItemsByCategoryScreen,
  OfflineScreen,
  AvatarScreen,
  CameraScreen,
  CitiesListScreen,
  MapScreen,
  ProfileUserScreen,
} from '_app/screens';
import { navigation, navigationRef } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

import RootTab from './RootTab';

enableScreens();

// TODO: type when done
const RootStack = createNativeStackNavigator();

const Index = (): JSX.Element => {
  const scheme = useColorScheme();

  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? darkTheme : lightTheme}>
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
          name="ItemsByCategory"
          component={ItemsByCategoryScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.item.name}`,
            presentation: 'formSheet',
          })}
          name="CitiesList"
          component={CitiesListScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: true,
            gestureEnabled: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            presentation: 'fullScreenModal',
            title: '',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Animated.View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: normalize(6),
                    paddingHorizontal: normalize(6),
                  }}
                >
                  <Icon name="x" size={18} color={colors.black} />
                </Animated.View>
              </TouchableWithoutFeedback>
            ),
          })}
          name="Map"
          component={MapScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: true,
            gestureEnabled: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            presentation: 'fullScreenModal',
            title: '',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Animated.View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: normalize(6),
                    paddingHorizontal: normalize(6),
                  }}
                >
                  <Icon name="x" size={18} color={colors.black} />
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
          component={OfflineScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Avatar"
          component={AvatarScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: true,
            gestureEnabled: true,
            presentation: 'fullScreenModal',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Animated.View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: normalize(6),
                    paddingHorizontal: normalize(6),
                  }}
                >
                  <Icon name="x" size={18} color={colors.black} />
                </Animated.View>
              </TouchableWithoutFeedback>
            ),
          }}
          name="Camera"
          component={CameraScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.user.username}`,
            presentation: 'formSheet',
          })}
          name="ProfileUser"
          component={ProfileUserScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
