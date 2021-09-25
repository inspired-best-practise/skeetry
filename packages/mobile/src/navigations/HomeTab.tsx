import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { THomeTabParamList } from 'types';

import { TabBarComponent } from '_app/components/BottomTabBar';
import { colors } from '_app/constants';
import { HomeScreen, ProfileScreen, AddScreen, CardScreen, LocationsScreen } from '_app/screens/Main';

// import { SwipesScreen } from '_app/screens/Main/Swipes';

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
const SharedStack = createSharedElementStackNavigator();

const ProfileStack = () => {
  return (
    <SharedStack.Navigator
      initialRouteName="Profile"
      // mode="modal"
      screenOptions={{
        // useNativeDriver: true,
        // gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        // transitionSpec: {
        //   open: iosTransitionSpec,
        //   close: iosTransitionSpec,
        // },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      // headerMode="float"
    >
      <SharedStack.Screen
        component={ProfileScreen}
        name="Profile"
        options={({ route }) => ({
          headerShown: false,
          headerTitle: 'Home',
        })}
      />
      <SharedStack.Screen
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
        })}
      />
    </SharedStack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <SharedStack.Navigator
      initialRouteName="Explore"
      // mode="modal"
      screenOptions={{
        // useNativeDriver: true,
        // gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        // transitionSpec: {
        //   open: iosTransitionSpec,
        //   close: iosTransitionSpec,
        // },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      // headerMode="float"
    >
      <SharedStack.Screen
        component={LocationsScreen}
        name="Explore"
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <SharedStack.Screen
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
        })}
      />
    </SharedStack.Navigator>
  );
};

// const SwipesStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//       }}
//     >
//       <Stack.Screen name="Swipes" component={SwipesScreen} />
//     </Stack.Navigator>
//   );
// };

const AddStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
        })}
        name="Add"
        component={AddScreen}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <SharedStack.Navigator
      initialRouteName="Home"
      // mode="modal"
      screenOptions={{
        // useNativeDriver: true,
        // gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        // transitionSpec: {
        //   open: iosTransitionSpec,
        //   close: iosTransitionSpec,
        // },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      // headerMode="float"
    >
      <SharedStack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <SharedStack.Screen
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
        })}
      />
    </SharedStack.Navigator>
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
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisible(route) ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused }) => <Icon name="home" size={26} color={focused ? colors.gray900 : colors.gray300} />,
        })}
        component={HomeStack}
        name="HomePage"
      />
      <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisible(route) ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused }) => (
            <Icon name="compass" size={26} color={focused ? colors.gray900 : colors.gray300} />
          ),
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
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={26} color={focused ? colors.gray900 : colors.gray300} />
          ),
        }}
        component={AddStack}
        name="AddPage"
      />
      {/* <Tab.Screen
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon name="globe" size={26} color={focused ? colors.gray900 : colors.gray300} />
          ),
        })}
        component={SwipesStack}
        name="SwipesPage"
      /> */}
      <Tab.Screen
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarStyle: {
            display: getTabBarVisible(route) ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused }) => <Icon name="user" size={26} color={focused ? colors.gray900 : colors.gray300} />,
        })}
        component={ProfileStack}
        name="ProfilePage"
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
