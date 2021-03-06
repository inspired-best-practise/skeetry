import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Easing, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';

import CloseModal from '_app/components/CloseModal/CloseModal';
import { colors, darkTheme, lightTheme } from '_app/constants';
import {
  CardScreen,
  SettingsScreen,
  SearchScreen,
  ItemsByCategoryScreen,
  OfflineScreen,
  AvatarScreen,
  CameraScreen,
  CitiesListScreen,
  MapScreen,
  ProfileUserScreen,
  StoriesScreen,
  UsersTopScreen,
  NotificationsScreen,
  AppearanceScreen,
  LanguageScreen,
  HelpScreen,
  GalleryScreen,
  AboutScreen,
} from '_app/screens';
import { ProfileChangeScreen } from '_app/screens/Settings/ProfileChange';
import { navigationRef } from '_app/services/navigations';

import AuthStack from './AuthStack';
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
      <RootStack.Navigator initialRouteName="Auth">
        <RootStack.Screen name="Auth" component={AuthStack} options={navigationOptions} />
        <RootStack.Screen name="RootTab" component={RootTab} options={navigationOptions} />
        <RootStack.Screen
          options={{
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('utils:search'),
            presentation: 'card',
          }}
          name="Search"
          component={SearchScreen}
        />
        {/* <RootStack.Screen
          options={({ route }) => ({
            ...TransitionPresets.ModalTransition,
            headerShown: PLATFORM.IS_IOS ? false : true,
            headerTitle: `${route.params.item.name} ${route.params.item.emoji}`,
            headerBackTitle: t('utils:back'),
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
            headerBackTitle: t('utils:back'),
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
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            title: '',
            headerBackTitle: t('utils:back'),
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
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            title: '',
            headerBackTitle: t('utils:back'),
            presentation: 'modal',
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="CardScreen"
          component={CardScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('utils:settings'),
            presentation: 'card',
          }}
          name="Settings"
          component={SettingsScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('profile:profile_change'),
            presentation: 'card',
          }}
          name="ProfileChange"
          component={ProfileChangeScreen}
        />
        <RootStack.Screen
          options={{
            ...TransitionPresets.ModalTransition,
            headerShown: false,
            headerBackTitle: t('utils:back'),
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
            headerBackTitle: t('utils:back'),
            presentation: 'modal',
            ...options,
            headerLeft: () => <CloseModal />,
          }}
          name="Camera"
          component={CameraScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTitle: `${route.params.user.username}`,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            presentation: 'card',
          })}
          name="ProfileUser"
          component={ProfileUserScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerTitle: '',
            headerBackTitle: t('utils:back'),
            presentation: 'transparentModal',
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="Stories"
          component={StoriesScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('utils:top'),
            presentation: 'card',
          })}
          name="UsersTop"
          component={UsersTopScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('settings:notifications'),
            presentation: 'card',
          })}
          name="Notifications"
          component={NotificationsScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('settings:appearance'),
            presentation: 'card',
          })}
          name="Appearance"
          component={AppearanceScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('settings:language'),
            presentation: 'card',
          })}
          name="Language"
          component={LanguageScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('settings:help'),
            presentation: 'card',
          })}
          name="Help"
          component={HelpScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            headerBackTitle: t('utils:back'),
            title: t('settings:about'),
            presentation: 'card',
          })}
          name="About"
          component={AboutScreen}
        />
        <RootStack.Screen
          options={({ route }) => ({
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: scheme === 'dark' ? colors.white : colors.black,
            title: '',
            headerBackTitle: t('utils:back'),
            ...options,
            headerLeft: () => <CloseModal />,
          })}
          name="Gallery"
          component={GalleryScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
