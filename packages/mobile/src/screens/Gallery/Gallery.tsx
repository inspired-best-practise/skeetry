import React from 'react';
import Gallery from 'react-native-image-gallery';

import { s } from './style';

export const GalleryScreen = ({ route }) => {
  const { images } = route.params;

  return <Gallery style={s.gallery} images={images.map(i => ({ ...i, source: { uri: i.url } }))} />;
};
