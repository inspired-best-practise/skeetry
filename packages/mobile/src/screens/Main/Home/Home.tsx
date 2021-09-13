import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';

import { Categories } from '_app/components/Categories';
import { Nearby } from '_app/components/Nearby';
import { nearby, popular } from '_app/components/Nearby/nearby.mock';
import { Stories } from '_app/components/Stories';
import { h4 } from '_app/constants';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={s.container}>
      <View style={{ display: 'flex', width: '100%', paddingHorizontal: 20, paddingBottom: 10, paddingTop: 5 }}>
        <Text style={h4}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <Stories />
        <Categories />

        {/* TODO: rename nearby component */}
        <Nearby title={`${t('home:nearby')}`} data={nearby} />
        <Nearby title={`${t('home:popular')}`} data={popular} />
      </ScrollView>
    </SafeAreaView>
  );
};
