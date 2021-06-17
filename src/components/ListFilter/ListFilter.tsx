import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as Icon from 'react-native-heroicons/solid';
import { ListFilterItem } from '_app/components';

export const ListFilter = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 14, marginBottom: 20 }}
    >
      <ListFilterItem name="Filter" icon={<Icon.FilterIcon size={16} color={'black'} />} />
      <ListFilterItem name="Visited" icon={<Icon.EyeIcon size={16} color={'black'} />} />
      <ListFilterItem name="Popular" />
      <ListFilterItem name="Mountains" />
      <ListFilterItem name="Sea" />
      <ListFilterItem name="Jungle" />
      <ListFilterItem name="Camping" />
    </ScrollView>
  );
};
