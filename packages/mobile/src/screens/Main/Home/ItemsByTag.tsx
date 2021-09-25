import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardList, ModalControl } from '_app/components';
import { PLATFORM, tTitle } from '_app/constants';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type route
export const ItemsByTagScreen = ({ route }) => {
  const { id, name, emoji, locale, localizations } = route.params.item;

  const { data, loading, error } = useCitiesQuery({
    variables: {
      input: {
        cityTagId: id,
      },
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  if (loading) {
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </SafeAreaView>;
  }

  const cities = data?.cities.edges;

  // TODO: add wrapper for formSheet screens with StatusBar and ModalControl
  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}
      {PLATFORM.IS_IOS && (
        <View style={{ paddingTop: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={tTitle}>{withLocalization('name', name, locale, localizations)}</Text>
          <View style={{ marginLeft: 5 }}>
            <Text>{emoji}</Text>
          </View>
        </View>
      )}
      <View style={{ paddingTop: 20 }}>
        {cities && cities.length !== 0 && !error ? (
          <CardList loading={loading} data={cities} />
        ) : (
          <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>There are no elements items yet.</Text>
          </SafeAreaView>
        )}
      </View>
    </SafeAreaView>
  );
};
