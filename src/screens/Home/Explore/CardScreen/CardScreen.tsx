import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';
import { s } from './styles';
import * as Icon from 'react-native-heroicons/solid';

const CardDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={s.container}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image style={{ width: SCREEN_WIDTH, height: 300 }} source={{ uri: item.images[2].src }} resizeMode="cover" />
      </SharedElement>
      <View style={s.content}>
        <View style={s.section}>
          <Text style={s.name}>{item.title}</Text>
          <View style={s.rating}>
            <Icon.StarIcon size={16} color={'black'} />
            <Text style={s.ratingNumber}>{item.rating.number}</Text>
            <Text style={s.ratingCount}>({item.rating.count})</Text>
          </View>
        </View>
        <View style={s.section}>
          <Text style={s.sectionTitle}>Where you'll be</Text>
          <Text>Google map</Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Where you'll be</Text>
          <Text>
            <Text style={s.sectionMainText}>National language:</Text> English
          </Text>
          <Text>
            <Text style={s.sectionMainText}>Currency:</Text> USD
          </Text>
          <Text>
            <Text style={s.sectionMainText}>Driving side:</Text> Left
          </Text>
        </View>

        <Text>Reviews list</Text>

        <Text>Cities list</Text>

        <Text>Buttons: want, visited</Text>
      </View>
    </View>
  );
};

export const CardScreen = observer(CardDetailScreen);
