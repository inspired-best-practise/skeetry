import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { CategoryCard } from '_app/components';

import { s } from './styles';

export const ExploreScreen = () => {
  return (
    <>
      <ScrollView style={s.categoryList}>
        <View style={s.categories}>
          <Text style={s.categoriesTitle}>Find where you want to go</Text>
        </View>
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
