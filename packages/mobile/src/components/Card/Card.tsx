import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import * as Icon from 'react-native-heroicons/solid';
import { SharedElement } from 'react-navigation-shared-element';

import { navigation } from '_app/services/navigations';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: refactor
export const Card = ({ item, size }: TCardProps) => {
  const { photos, name, id, rating, country, locale, localizations } = item;
  const [active, setActive] = useState(0);

  console.log('country', country);

  const changeItem = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  return (
    <View style={[s.item, size === 'base' && s.itemSizeBase]}>
      <View
        style={[
          s.item,
          size === 'full' && s.itemSizeFull,
          size === 'wide' && s.itemSizeWide,
          size === 'base' && s.itemSizeBase,
          size === 'small' && s.itemSizeSmall,
        ]}
      >
        {size !== 'full' && (
          <View>
            {photos ? (
              <Pressable
                onPress={() =>
                  navigation.push('CardScreen', {
                    item,
                  })
                }
              >
                <SharedElement id={`item.${1}.image`}>
                  <FastImage
                    style={[
                      s.itemImage,
                      size === 'wide' && s.itemSizeWide,
                      size === 'base' && s.itemSizeBase,
                      size === 'small' && s.itemSizeSmall,
                    ]}
                    source={{ uri: photos[0], priority: FastImage.priority.normal }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </SharedElement>
              </Pressable>
            ) : (
              <Pressable
                key={'key'}
                onPress={() =>
                  navigation.push('CardScreen', {
                    item,
                  })
                }
              >
                <SharedElement id={`item.${id}.image`}>
                  <FastImage
                    style={[
                      s.itemImage,
                      size === 'wide' && s.itemSizeWide,
                      size === 'base' && s.itemSizeBase,
                      size === 'small' && s.itemSizeSmall,
                    ]}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </SharedElement>
              </Pressable>
            )}
          </View>
        )}
        {size === 'full' && (
          <View>
            <ScrollView
              scrollEventThrottle={6}
              onScroll={({ nativeEvent }) => changeItem(nativeEvent)}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {photos ? (
                photos.map((i, index) => (
                  <Pressable
                    key={index}
                    onPress={() =>
                      navigation.push('CardScreen', {
                        item,
                      })
                    }
                  >
                    <SharedElement id={`item.${index}.image`}>
                      <FastImage
                        key={index}
                        style={[s.itemImage, s.itemSizeFull]}
                        source={{ uri: i, priority: FastImage.priority.normal }}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </SharedElement>
                  </Pressable>
                ))
              ) : (
                <Pressable
                  key={'key'}
                  onPress={() =>
                    navigation.push('CardScreen', {
                      item,
                    })
                  }
                >
                  <SharedElement id={`item.${id}.image`}>
                    <FastImage
                      style={[s.itemImage, size === 'full' && s.itemSizeFull]}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </SharedElement>
                </Pressable>
              )}
            </ScrollView>
            <View style={s.wrapDot}>
              {photos &&
                photos.map((i, index) => (
                  <Text key={index} style={active === index ? s.dotActive : s.dot}>
                    ●
                  </Text>
                ))}
            </View>
          </View>
        )}
        <View style={s.flag}>
          <Text style={s.flagText}>{country && country.flag}</Text>
        </View>
      </View>
      <View style={s.rating}>
        <Icon.StarIcon size={16} color="black" />
        <Text style={s.ratingNumber}>{rating ? rating.number : 0}</Text>
        <Text style={s.ratingCount}>{rating ? rating.count : 0}</Text>
      </View>
      <Text numberOfLines={1} style={s.itemTitle}>
        {withLocalization('name', name, locale, localizations)}
      </Text>
      <Text numberOfLines={1} style={s.itemDesc}>
        {withLocalization('name', name, locale, localizations)}
      </Text>
    </View>
  );
};
