import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import { AppContext } from '_app/context';

export const CategoriesPlaceholder = () => {
  const { theme } = useContext(AppContext);

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
          highlightColor={theme.gray04}
          boneColor={theme.gray01}
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
