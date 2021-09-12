import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { CardList, ModalControl } from '_app/components';
import { paragraph } from '_app/constants';
import { useItemsQuery } from '_app/generated/graphql';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type route
export const ItemsByTagScreen = ({ route }) => {
  const { id, name, emoji, locale, localizations } = route.params.item;

  const { data, loading, error } = useItemsQuery({
    variables: {
      input: {
        itemTagId: id,
      },
    },
  });

  if (loading) {
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </SafeAreaView>;
  }

  const items = data?.items;

  // TODO: add wrapper for formSheet screens with StatusBar and ModalControl
  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />
      <View style={{ paddingTop: 100 }}>
        <View>
          <Text>{emoji}</Text>
        </View>
        <Text style={paragraph}>{withLocalization('name', name, locale, localizations)}</Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        {items && items.length !== 0 && !error ? (
          <CardList loading={loading} data={items} />
        ) : (
          <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>There are no elements items yet.</Text>
          </SafeAreaView>
        )}
      </View>
    </SafeAreaView>
  );
};
