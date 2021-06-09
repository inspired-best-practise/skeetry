import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import * as Icon from 'react-native-heroicons/solid';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TabBarComponent } from '_app/components/BottomTabBar';

import { HomeIndexScreen, AccountScreen, ActivityScreen, AddScreen, ExploreScreen } from '_app/screens/Home';
import { CardScreen } from '_app/screens/Home/Explore/CardScreen';

export const iosTransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

const Stack = createStackNavigator();
const SharedElementStack = createSharedElementStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen component={AccountScreen} name="AccountIndex" />
    </Stack.Navigator>
  );
};

const ActivityStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="ActiviyIndex" component={ActivityScreen} />
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <SharedElementStack.Navigator
      initialRouteName="Explore"
      mode="modal"
      screenOptions={{
        useNativeDriver: true,
        gestureResponseDistance: {
          vertical: 300,
        },
        ...TransitionPresets.ModalSlideFromBottomIOS,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        // Opacity animation, you can also adjust this by playing with transform properties.
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      headerMode="none"
    >
      <SharedElementStack.Screen name="Explore" component={ExploreScreen} />
      <SharedElementStack.Screen
        name="CardScreen"
        component={CardScreen}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          if (route.name === 'CardScreen' && showing) {
            // Open animation fades in image, title and description
            return [
              {
                id: `item.${item.id}.image`,
              },
              {
                id: `item.${item.id}.title`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-top',
              },
              {
                id: `item.${item.id}.description`,
                animation: 'fade',
                resize: 'clip',
                align: 'left-top',
              },
            ];
          } else {
            // Close animation only fades out image
            return [
              {
                id: `item.${item.id}.image`,
              },
            ];
          }
        }}
      />
    </SharedElementStack.Navigator>
  );
};

const AddStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Add" component={AddScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen component={HomeIndexScreen} name="HomeIndex" />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  const tabBarOptions: BottomTabBarOptions = {
    showLabel: false,
  };
  const navigationOptions: BottomTabNavigationOptions = {};

  return (
    <Tab.Navigator tabBar={TabBarComponent} tabBarOptions={tabBarOptions} screenOptions={navigationOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.HomeIcon size={30} color={focused ? '#000' : '#ddd'} />,
        }}
        component={HomeStack}
        name="HomeIndex"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.ViewGridIcon size={30} color={focused ? '#000' : '#ddd'} />,
        }}
        component={ExploreStack}
        name="Explore"
      />
      <Tab.Screen
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('AddChooser');
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => <Icon.PlusCircleIcon size={30} color={'#ddd'} />,
        }}
        component={AddStack}
        name="Add"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.HeartIcon size={30} color={focused ? '#000' : '#ddd'} />,
        }}
        component={ActivityStack}
        name="Activity"
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.UserIcon size={30} color={focused ? '#000' : '#ddd'} />,
        }}
        component={AccountStack}
        name="Account"
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
