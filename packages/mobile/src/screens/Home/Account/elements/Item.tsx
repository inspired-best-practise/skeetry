import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

import { navigation } from '_app/services/navigations';

export const renderItem = ({ item }: any) => (
  <Pressable onPress={() => navigation.navigate('CardScreen', { item })}>
    <View key={item.id} style={s.card}>
      <SharedElement id={`item.${item.id}.image`}>
        <FastImage
          style={s.cardImage}
          source={{ uri: item.imageUrl, priority: FastImage.priority.normal }}
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
        blurAmount={25}
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
          A very large title in two lines and something
        </Text>
      </BlurView>
    </View>
  </Pressable>
);
