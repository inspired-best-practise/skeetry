import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

export const CategoriesSkeleton = () => {
  return (
    <ScrollView
      horizontal
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ margin: 20 }}
    >
      {[{}, {}, {}].map((_i, index) => (
        <SkeletonContent
          key={index}
          containerStyle={{ flex: 1, marginRight: 10 }}
          isLoading={true}
          layout={[
            {
              key: 'image',
              borderRadius: 12,
              height: 55,
              width: 170,
            },
          ]}
        />
      ))}
    </ScrollView>
  );
};
