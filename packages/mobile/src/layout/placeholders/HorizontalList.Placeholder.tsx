import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import { s } from '_app/components/Card/styles';
import { AppContext } from '_app/context';

export const HorizontalListPlaceholder = ({ size }: { size: string }) => {
  const { theme } = useContext(AppContext);

  let styleImage = {};
  let styleText = {};

  // TODO: refactor
  switch (size) {
    case 'wide':
      styleImage = 'wide' ? s.itemSizeWide : {};
      styleText = 'wide' ? s.itemWide : {};
      break;
    case 'small':
      styleImage = 'small' ? s.itemSizeSmall : {};
      styleText = 'small' ? s.itemSmall : {};
      break;

    default:
      break;
  }

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
          containerStyle={{ flex: 1, marginRight: 20 }}
          isLoading={true}
          highlightColor={theme.gray04}
          boneColor={theme.gray01}
          layout={[
            {
              key: 'image',
              marginBottom: 10,
              borderRadius: 12,
              ...styleImage,
            },
            {
              key: 'city',
              height: 10,
              marginBottom: 10,
              ...styleText,
            },
            {
              key: 'country',
              height: 10,
              ...styleText,
            },
          ]}
        />
      ))}
    </ScrollView>
  );
};
