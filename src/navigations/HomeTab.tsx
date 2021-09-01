import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import * as Icon from 'react-native-heroicons/solid';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { TabBarComponent } from '_app/components/BottomTabBar';
import {
  HomeIndexScreen,
  AccountScreen,
  AddScreen,
  ExploreScreen,
  CountriesScreen,
  CitiesScreen,
  PlacesScreen,
  CardScreen,
} from '_app/screens/Home';

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
    <SharedElementStack.Navigator
      initialRouteName="Explore"
      mode="modal"
      screenOptions={{
        useNativeDriver: true,
        gestureEnabled: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      headerMode="float"
    >
      <SharedElementStack.Screen
        component={AccountScreen}
        name="AccountIndex"
        options={({ route }) => ({
          headerShown: false,
          headerTitle: 'Account',
        })}
      />
      <SharedElementStack.Screen
        name="CardScreen"
        component={CardScreen}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          if (route.name === 'CardScreen' && showing) {
            // Open animation fades in image, title and description
            return [
              {
                id: `item.${item.id}.image`,
              },
              {
                id: `item.${item.id}.title`,
                animation: 'move',
                resize: 'clip',
                align: 'left-top',
              },
              {
                id: `item.${item.id}.description`,
                animation: 'move',
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
        options={({ route }) => ({
          headerShown: false,
          gestureEnabled: true,
          cardStyle: {
            backgroundColor: '#fff',
          },
          title: route.params.item.title,
        })}
      />
    </SharedElementStack.Navigator>
  );
};

// const ActivityStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: false,
//       }}
//     >
//       <Stack.Screen name="ActiviyIndex" component={ActivityScreen} />
//     </Stack.Navigator>
//   );
// };

const ExploreStack = () => {
  return (
    <SharedElementStack.Navigator
      initialRouteName="Explore"
      mode="modal"
      screenOptions={{
        useNativeDriver: true,
        gestureEnabled: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      headerMode="float"
    >
      <SharedElementStack.Screen name="Explore" component={ExploreScreen} />
      <SharedElementStack.Screen
        name="Countries"
        component={CountriesScreen}
        options={{
          headerTintColor: '#000',
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <SharedElementStack.Screen
        name="Cities"
        component={CitiesScreen}
        options={{
          headerTintColor: '#000',
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <SharedElementStack.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          headerTintColor: '#000',
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <SharedElementStack.Screen
        name="CardScreen"
        component={CardScreen}
        sharedElements={(route, otherRoute, showing) => {
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
        options={({ route }) => ({
          headerShown: false,
          gestureEnabled: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
          title: route.params.item.title,
        })}
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
      <Stack.Screen component={HomeIndexScreen} name="HomeIndexScreen" />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<THomeTabParamList>();

const HomeTab = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopColor: '#dddddd',
      backgroundColor: 'transparent',
    },
  };

  function getTabBarVisible(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['CardScreen'];

    if (hideOnScreens.indexOf(routeName) > -1) {
      return false;
    }

    return true;
  }

  return (
    <Tab.Navigator tabBar={TabBarComponent} screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.HomeIcon size={30} color={focused ? '#777777' : '#bbbbbb'} />,
        }}
        component={HomeStack}
        name="HomeIndexPage"
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisible(route) ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused }) => <Icon.ViewGridIcon size={30} color={focused ? '#777777' : '#bbbbbb'} />,
        })}
        component={ExploreStack}
        name="ExplorePage"
      />
      <Tab.Screen
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('AddChooser');
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => <Icon.SearchIcon size={30} color={'#bbbbbb'} />,
        }}
        component={AddStack}
        name="AddPage"
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Icon.HeartIcon size={30} color={focused ? '#777777' : '#bbbbbb'} />,
        }}
        component={ActivityStack}
        name="Activity"
      /> */}
      <Tab.Screen
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ focused }) => <Icon.UserIcon size={30} color={focused ? '#777777' : '#bbbbbb'} />,
        })}
        component={AccountStack}
        name="AccountPage"
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
