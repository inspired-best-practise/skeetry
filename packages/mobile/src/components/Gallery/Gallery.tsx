import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { whiteColor } from '_app/constants';

import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import { s } from './styles';

export const Gallery = ({ images }: GalleryProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderItem = ({ item }) => {
    return (
      <FastImage
        style={s.image}
        source={{ uri: item.url, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
      />
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

  if (images.length === 0) {
    return <ImagePlaceholder style={s.image} size={40} />;
  }

  if (images.length <= 1) {
    return (
      <FastImage
        style={s.image}
        source={{ uri: images[0].url, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }

  return (
    <View style={s.container}>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        decelerationRate="fast"
        pagingEnabled={true}
        onMomentumScrollEnd={onScrollEnd}
      />

      <View style={s.pager}>
        <Text style={whiteColor}>
          {currentPage}/{images.length}
        </Text>
      </View>
    </View>
  );
};
