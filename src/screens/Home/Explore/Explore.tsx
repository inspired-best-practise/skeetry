// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { CategoryCard } from '_app/components';
import { s } from './styles';
// import { CitiesScreen } from './Cities';
// import { CountriesScreen } from './Countries';
// import { PlacesScreen } from './Places';
// import { StatesScreen } from './States';

// const Tab = createMaterialTopTabNavigator();

const Explore = () => {
  return (
    <>
      <SafeAreaView />
      <View style={s.categories}>
        <Text style={s.categoriesTitle}>Find where you want to go</Text>
      </View>
      <ScrollView style={s.categoryList}>
        <CategoryCard
          name="Countries"
          count="197"
          image="https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/250x300"
        />
        <CategoryCard
          name="Cities"
          count="999+"
          image="https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80/250x300"
        />
        <CategoryCard
          name="Places"
          count="999+"
          image="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300"
        />
      </ScrollView>
    </>

    // <>
    //   <SafeAreaView />
    //   <Tab.Navigator
    //     tabBarOptions={{
    //       activeTintColor: '#ffffff',
    //       inactiveTintColor: 'black',
    //       pressColor: '#9BC9E2',
    //       indicatorStyle: {
    //         height: '100%',
    //         backgroundColor: 'black',
    //         borderRadius: 8,
    //       },
    //       style: {
    //         backgroundColor: '#eeeeee',
    //         borderRadius: 8,
    //         margin: 16,
    //       },
    //       labelStyle: { fontSize: 10, fontWeight: '700' },
    //     }}
    //   >
    //     <Tab.Screen children={() => <CountriesScreen />} name="Countries" />
    //     <Tab.Screen children={() => <CitiesScreen />} name="Cities" />
    //     <Tab.Screen children={() => <StatesScreen />} name="States" />
    //     <Tab.Screen children={() => <PlacesScreen />} name="Places" />
    //   </Tab.Navigator>
    // </>
  );
};

export const ExploreScreen = observer(Explore);
