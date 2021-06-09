import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { observer } from 'mobx-react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from './styles';
import { CitiesScreen } from './Cities';
import { CountriesScreen } from './Countries';
import { PlacesScreen } from './Places';
import { StatesScreen } from './States';

const Tab = createMaterialTopTabNavigator();

// TODO: iOS Segment Control instead createMaterialTopTabNavigator
const Explore = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: 'black',
        pressColor: '#9BC9E2',
        indicatorStyle: {
          height: '100%',
          backgroundColor: 'black',
          borderRadius: 8,
        },
        style: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
          margin: 16,
        },
        labelStyle: { fontSize: 10, fontWeight: '700' },
      }}
    >
      <Tab.Screen children={() => <PlacesScreen />} name="Places" />
      <Tab.Screen children={() => <CountriesScreen />} name="Countries" />
      <Tab.Screen children={() => <CitiesScreen />} name="Cities" />
      <Tab.Screen children={() => <StatesScreen />} name="States" />
    </Tab.Navigator>
  );
};

export const ExploreScreen = observer(Explore);
