import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';
import { s } from './styles';
import * as Icon from 'react-native-heroicons/solid';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const CardDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={s.container}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image style={{ width: SCREEN_WIDTH, height: 300 }} source={{ uri: item.images[2].src }} resizeMode="cover" />
      </SharedElement>
      <ScrollView style={s.content}>
        <View style={s.section}>
          <Text style={s.name}>{item.flag + ' ' + item.title}</Text>
          {/* <View style={s.rating}>
            <Icon.StarIcon size={16} color={'black'} />
            <Text style={s.ratingNumber}>{item.rating.number}</Text>
            <Text style={s.ratingCount}>({item.rating.count})</Text>
          </View> */}
        </View>
        <View style={s.section}>
          <View style={s.cardButtons}>
            <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => {}}>
              <Text style={s.buttonText}>Want</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => {}}>
              <Text style={s.buttonText}>Visited</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={s.section}>
          <Text style={s.sectionTitle}>Where you'll be</Text>
          <Text>Google map</Text>
          {/* <MapView
            style={{
              flex: 1,
              width: '100%',
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
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

        {/* <Text>Reviews list</Text> */}

        {/* <Text>Cities list</Text> */}
      </ScrollView>
    </View>
  );
};

export const CardScreen = observer(CardDetailScreen);
