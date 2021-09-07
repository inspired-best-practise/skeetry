import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

import { navigation } from '_app/services/navigations';

import { s } from '../styles';

export const renderItem = ({ item }: any) => (
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
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 10,
          width: '100%',
          borderRadius: 4,
          minHeight: 55,
          maxHeight: 55,
          justifyContent: 'center',
        }}
        blurType="light"
        blurAmount={8}
      >
        <Text
          numberOfLines={2}
          style={{
            display: 'flex',
            fontWeight: '700',
            color: '#fff',
            textAlign: 'left',
          }}
        >
          {item.name}
        </Text>
      </BlurView>
    </View>
  </Pressable>
);
