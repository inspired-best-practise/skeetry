import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { s } from './styles';

export const ExploreScreen = () => {
  return (
    <ScrollView style={s.categoryList}>
      <View style={s.categories}>
        <Text style={s.categoriesTitle}>Find where you want to go</Text>
      </View>
    </ScrollView>
  );
};
