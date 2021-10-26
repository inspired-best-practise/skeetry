import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Easing, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';

import CloseModal from '_app/components/CloseModal/CloseModal';
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
  StoriesScreen,
  UsersTopScreen,
} from '_app/screens';
import { ProfileChangeScreen } from '_app/screens/Profile/ProfileChange';
import { navigationRef } from '_app/services/navigations';
import { SCREEN_HEIGHT } from '_app/utils/dimensions';

import RootTab from './RootTab';

enableScreens();

// TODO: type when done
const RootStack = createStackNavigator();

const options = {
  gestureEnabled: false,
  headerBackTitleVisible: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 300, easing: Easing.inOut(Easing.ease) },
    },
    close: {
      animation: 'timing',
      config: { duration: 300, easing: Easing.inOut(Easing.ease) },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const Index = (): JSX.Element => {
  const scheme = useColorScheme();

  const { t } = useTranslation();

  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <RootStack.Navigator initialRouteName="RootTab">
        <RootStack.Screen name="Root Tab" component={RootTab} options={navigationOptions} />
        <RootStack.Screen
          options={{
            headerShown: PLATFORM.IS_IOS ? false : true,
            title: t('utils:search'),
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT,
          }}
          name="AddChooser"
          component={AddChooserScreen}
        />
        {/* <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.item.name} ${route.params.item.emoji}`,
            presentation: 'modal',
          })}
          name="ItemsByCategory"
          component={ItemsByCategoryScreen}
        /> */}
        {/* <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.item.name}`,
            presentation: 'modal',
          })}
          name="CitiesList"
          component={CitiesListScreen}
        /> */}
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            title: '',
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="Map"
          component={MapScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            title: '',
            presentation: 'transparentModal',
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="CardScreen"
          component={CardScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: PLATFORM.IS_IOS ? false : true,
            title: t('utils:settings'),
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT,
          }}
          name="ProfileSettings"
          component={ProfileSettingsScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: PLATFORM.IS_IOS ? false : true,
            title: t('profile:profile_change'),
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT,
          }}
          name="ProfileChange"
          component={ProfileChangeScreen}
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
            presentation: 'transparentModal',
          }}
          name="Avatar"
          component={AvatarScreen}
        />
        <RootStack.Screen
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            title: t('utils:camera'),
            presentation: 'transparentModal',
            ...options,
            headerLeft: () => <CloseModal />,
          }}
          name="Camera"
          component={CameraScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.user.username}`,
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT,
          })}
          name="ProfileUser"
          component={ProfileUserScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: colors.white,
            headerTitle: '',
            presentation: 'transparentModal',
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="Stories"
          component={StoriesScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: PLATFORM.IS_IOS ? false : true,
            title: t('utils:top'),
            presentation: 'modal',
            gestureResponseDistance: SCREEN_HEIGHT,
          })}
          name="UsersTop"
          component={UsersTopScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
