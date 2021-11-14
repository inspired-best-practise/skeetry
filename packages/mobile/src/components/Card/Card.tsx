import React, { useContext, useState } from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';

import { AppContext } from '_app/context';
import { ImagePlaceholder } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { languageTag } from '_app/utils/helpers';

import { s } from './styles';

// TODO: refactor
export const Card = ({ item, size }: TCardProps) => {
  const { theme } = useContext(AppContext);
  const { images, name, countryCode, alternateName } = item;
  const [active, setActive] = useState(0);

  const ruName = alternateName
    ? alternateName.find(a => {
        if (a.isoLang === 'ru' && a.isPreferredName === true) {
          return a;
        }

        if (a.isoLang === 'ru' && !a.isHistoric) {
          return a;
        }

        return null;
      })
    : null;

  const title = languageTag === 'ru' && ruName && ruName.alternateName ? ruName.alternateName : name;

  const changeItem = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  return (
    <View
      style={[
        s.item,
        size === 'full' && s.itemFull,
        size === 'wide' && s.itemWide,
        size === 'base' && s.itemBase,
        size === 'small' && s.itemSmall,
      ]}
    >
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
            {images.length !== 0 ? (
              <Pressable
                onPress={() =>
                  navigation.push('CardScreen', {
                    item,
                  })
                }
              >
                <FastImage
                  style={[
                    s.itemImage,
                    size === 'wide' && s.itemSizeWide,
                    size === 'base' && s.itemSizeBase,
                    size === 'small' && s.itemSizeSmall,
                  ]}
                  source={{ uri: images[0].url, priority: FastImage.priority.normal }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </Pressable>
            ) : (
              <Pressable
                key={item.id}
                onPress={() =>
                  navigation.push('CardScreen', {
                    item,
                  })
                }
              >
                <ImagePlaceholder
                  style={[
                    s.itemImage,
                    size === 'wide' && s.itemSizeWide,
                    size === 'base' && s.itemSizeBase,
                    size === 'small' && s.itemSizeSmall,
                  ]}
                  size={35}
                />
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
              {images ? (
                images.map((i, index) => (
                  <Pressable
                    key={index}
                    onPress={() =>
                      navigation.push('CardScreen', {
                        item,
                      })
                    }
                  >
                    <FastImage
                      key={index}
                      style={[s.itemImage, s.itemSizeFull]}
                      source={{ uri: i, priority: FastImage.priority.normal }}
                      resizeMode={FastImage.resizeMode.cover}
                    />
                  </Pressable>
                ))
              ) : (
                <Pressable
                  key={item.id}
                  onPress={() =>
                    navigation.push('CardScreen', {
                      item,
                    })
                  }
                >
                  <ImagePlaceholder style={[s.itemImage, size === 'full' && s.itemSizeFull]} size={35} />
                </Pressable>
              )}
            </ScrollView>
            <View style={s.wrapDot}>
              {images &&
                images.map((i, index) => (
                  <Text key={index} style={active === index ? s.dotActive : s.dot}>
                    ●
                  </Text>
                ))}
            </View>
          </View>
        )}
        {/* <View style={s.flag}>
          <Text style={s.flagText}>{state ? state.country.emoji : country.emoji}</Text>
        </View> */}
      </View>
      {/* {size !== 'base' && (
        <View style={s.rating}>
          <Icon.StarIcon size={16} color={colors.black} />
          <Text style={s.ratingNumber}>{rating ? rating.number : 0}</Text>
          <Text style={s.ratingCount}>{rating ? rating.count : 0}</Text>
        </View>
      )} */}
      <Text numberOfLines={1} style={[s.itemTitle, styles(theme).text]}>
        {title}
      </Text>
      <Text numberOfLines={1} style={[s.itemDesc, styles(theme).text]}>
        {countryCode}
        {/* {state
          ? withLocalization('state.country.name', state.country.name, locale, localizations)
          : withLocalization('country.name', country.name, locale, localizations)} */}
      </Text>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
  });
