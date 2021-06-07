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

const Explore = () => {
  return (
    <SafeAreaView style={s.safeAreaView}>
      <Tab.Navigator>
        <Tab.Screen children={() => <PlacesScreen />} name="Places" />
        <Tab.Screen children={() => <CountriesScreen />} name="Countries" />
        <Tab.Screen children={() => <CitiesScreen />} name="Cities" />
        <Tab.Screen children={() => <StatesScreen />} name="States" />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export const ExploreScreen = observer(Explore);
