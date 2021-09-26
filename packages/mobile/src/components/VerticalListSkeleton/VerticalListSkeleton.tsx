import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import { s } from '../Card/styles';

export const VerticalListSkeleton = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ margin: 20 }}
    >
      {[{}, {}, {}].map((_i, index) => (
        <SkeletonContent
          key={index}
          containerStyle={{ flex: 1, marginBottom: 20 }}
          isLoading={true}
          layout={[
            {
              key: 'image',
              borderRadius: 12,
              marginBottom: 10,
              ...s.itemSizeFull,
            },
            {
              key: 'city',
              height: 10,
              marginBottom: 10,
              ...s.itemFull,
            },
            {
              key: 'country',
              height: 10,
              ...s.itemFull,
            },
          ]}
        />
      ))}
    </ScrollView>
  );
};
