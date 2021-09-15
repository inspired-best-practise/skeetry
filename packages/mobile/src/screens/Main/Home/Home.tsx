import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';

import { HorizontalCardList } from '_app/components';
import { Categories } from '_app/components/Categories';
import { nearby, popular } from '_app/components/HorizontalCardList/nearby.mock';
import { Stories } from '_app/components/Stories';
import { tTitle } from '_app/constants';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={tTitle}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.main}>
        <Stories />
        <Categories />
        <HorizontalCardList title={`${t('home:nearby')}`} data={nearby} />
        <HorizontalCardList title={`${t('home:popular')}`} data={popular} />
      </ScrollView>
    </SafeAreaView>
  );
};
