import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

import { paragraph } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { withLocalization } from '_app/utils/helpers';

import { s } from '../styles';

// TODO: refactor
export const renderItem = ({ item }: any) => {
  const { name, locale, localizations } = item;

  return (
    <Pressable onPress={() => navigation.navigate('CardScreen', { item })}>
      <View key={item.id} style={s.card}>
        <SharedElement id={`item.${item.id}.image`}>
          <FastImage
            style={s.cardImage}
            source={{
              uri: item.photos[0]
                ? item.photos[0]
                : 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </SharedElement>
        <View
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 4,
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            padding: 10,
            width: '100%',
            borderRadius: 4,
            justifyContent: 'center',
          }}
        >
          <Text
            numberOfLines={2}
            style={[
              paragraph,
              {
                display: 'flex',
                fontWeight: '700',
                color: '#fff',
                textAlign: 'left',
              },
            ]}
          >
            {withLocalization('name', name, locale, localizations)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
