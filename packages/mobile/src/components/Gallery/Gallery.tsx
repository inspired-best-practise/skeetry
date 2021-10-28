import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Button } from '_app/components';
import { tBase, tTitle, whiteColor } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const Gallery = ({ images }: GalleryProps) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const Image = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.push('Gallery', {
            images,
            page: currentPage,
          })
        }
      >
        <FastImage
          style={s.image}
          source={{ uri: item.url, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  const onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    console.log('scrolled to page ', pageNum);
    setCurrentPage(pageNum + 1);
  };

  return (
    <View style={s.container}>
      <FlatList
        data={[...images, { id: 'plusImage', plusImage: true }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item.plusImage) {
            return (
              <View style={s.plusImage}>
                <Text style={[tTitle, { marginBottom: 10 }]}>
                  {images.length === 0 ? t('card:no_images') : t('card:contribute')}
                </Text>
                {images.length === 0 && <Text style={[tBase, { marginBottom: 5 }]}>{t('card:contribute')}</Text>}
                <Text style={[tBase, { marginBottom: 15 }]}>{t('card:add_your_photo')}</Text>
                <Button title={t('card:submit_photo')} />
              </View>
            );
          }
          return <Image item={item} />;
        }}
        keyExtractor={item => item.id}
        decelerationRate="fast"
        pagingEnabled={true}
        onMomentumScrollEnd={onScrollEnd}
      />

      <View style={s.pager}>
        <Text style={whiteColor}>
          {currentPage}/{images.length + 1}
        </Text>
      </View>
    </View>
  );
};
