import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { CategoryCard } from '_app/components';

import { s } from './styles';

const Explore = () => {
  return (
    <>
      <View style={s.categories}>
        <Text style={s.categoriesTitle}>Find where you want to go</Text>
      </View>
      <ScrollView style={s.categoryList}>
        <CategoryCard
          name="Countries"
          count="197"
          image="https://images.unsplash.com/photo-1496614932623-0a3a9743552e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/250x300"
          stack="Countries"
          screen="CountriesScreen"
        />
        <CategoryCard
          name="Cities"
          count="999+"
          image="https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80/250x300"
          stack="Cities"
          screen="CitiesScreen"
        />
        <CategoryCard
          name="Places"
          count="999+"
          image="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300"
          stack="Places"
          screen="PlacesScreen"
        />
      </ScrollView>
    </>
  );
};

export const ExploreScreen = observer(Explore);
