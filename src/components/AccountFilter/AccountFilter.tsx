import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AccountFilterItem } from '_app/components';

export const AccountFilter = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 9,
        marginBottom: 20,
        paddingBottom: 30,
      }}
    >
      <AccountFilterItem name="Want" />
      <AccountFilterItem name="Visited" />
      <AccountFilterItem name="Countries" />
      <AccountFilterItem name="Cities" />
      <AccountFilterItem name="Places" />
    </ScrollView>
  );
};
