import { useActionSheet } from '@expo/react-native-action-sheet';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image, TouchableHighlight, StatusBar, Pressable, ActionSheetIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

import ImagePlaceholder from '_app/components/ImagePlaceholder/ImagePlaceholder';
import { colors, mapGfxStyle, PLATFORM } from '_app/constants';
import { useAddCityMutation, useCityQuery, useMoveCityMutation, useRemoveCityMutation } from '_app/generated/graphql';
import { authStore } from '_app/stores';

import { s } from './styles';

// TODO: refactor mutations and conditions, split into different components and files
export const CardScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { item } = route.params;
  const { showActionSheetWithOptions } = useActionSheet();
  const [currentCity, setCurrentCity] = useState(item);

  const user = authStore(state => state.user);

  const {
    data: itemData,
    loading: itemLoading,
    error: itemError,
    refetch: itemRefetch,
  } = useCityQuery({
    variables: {
      id: currentCity.id,
    },
  });

  useEffect(() => {
    if (itemData) {
      setCurrentCity(itemData.city);
    }
  }, [itemData]);

  const [want, { loading: loadingWant }] = useAddCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [visited, { loading: loadingVisited }] = useAddCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'VISITED',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [removeWant, { loading: loadingRemoveWant }] = useRemoveCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [removeVisited, { loading: loadingRemoveVisited }] = useRemoveCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'VISITED',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [moveWant, { loading: loadingMoveWant }] = useMoveCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [moveVisited, { loading: loadingMoveVisited }] = useMoveCityMutation({
    variables: {
      input: {
        id: currentCity.id,
        type: 'VISITED',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const handlePress = (name: string) => {
    if (name === 'want') {
      want();
    }
    if (name === 'visited') {
      visited();
    }
  };

  const alreadyWanted = currentCity.userWanted && currentCity.userWanted.find(u => u.id === user.id);
  const alreadyVisited = currentCity.userVisited && currentCity.userVisited.find(u => u.id === user.id);

  const loading =
    loadingWant ||
    loadingVisited ||
    loadingRemoveWant ||
    loadingRemoveVisited ||
    loadingMoveWant ||
    loadingMoveVisited ||
    itemLoading;

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: [
              `${t('utils:cancel')}`,
              `${alreadyWanted ? t('utils:visited') : t('utils:want')}`,
              `${t('utils:delete')}`,
            ],
            destructiveButtonIndex: 2,
            cancelButtonIndex: 0,
            userInterfaceStyle: 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              alreadyWanted ? moveWant() : moveVisited();
            } else if (buttonIndex === 2) {
              alreadyWanted ? removeWant() : removeVisited();
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: [
              `${t('utils:cancel')}`,
              `${alreadyWanted ? t('utils:visited') : t('utils:want')}`,
              `${t('utils:delete')}`,
            ],
            cancelButtonIndex: 0,
            destructiveButtonIndex: 2,
          },
          i => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              alreadyWanted ? moveWant() : moveVisited();
            } else if (i === 2) {
              alreadyWanted ? removeWant() : removeVisited();
            }
          },
        );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.container}>
      <StatusBar barStyle="light-content" animated translucent />
      {currentCity.photos ? (
        <Image
          style={s.cardImage}
          source={{
            uri: currentCity.photos[0],
          }}
          resizeMode="cover"
        />
      ) : (
        <ImagePlaceholder style={s.cardImage} size={40} />
      )}

      {/* {PLATFORM.IS_ANDROID && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Animated.View style={[s.backIcon, { opacity: fadeAnim }]}>
            <Icon.XIcon size={18} color={colors.black} />
          </Animated.View>
        </TouchableWithoutFeedback>
      )} */}
      <View style={s.content}>
        <View style={s.section}>
          <Text style={s.name}>
            {currentCity.name}
            {/* {currentCity.state
              ? currentCity.state.country.emoji + ' ' + currentCity.name
              : currentCity.country.emoji + ' ' + currentCity.name} */}
          </Text>
        </View>
        <View style={s.section}>
          <View style={s.cardButtons}>
            {!alreadyWanted && !alreadyVisited && !loading ? (
              <>
                <TouchableHighlight
                  underlayColor={colors.mainGray}
                  style={s.button}
                  onPress={() => handlePress('want')}
                >
                  <Text style={s.buttonText}>{t('utils:want')}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={colors.mainGray}
                  style={s.button}
                  onPress={() => handlePress('visited')}
                >
                  <Text style={s.buttonText}>{t('utils:visited')}</Text>
                </TouchableHighlight>
              </>
            ) : (
              <TouchableHighlight
                underlayColor={colors.mainGray}
                style={[s.button, (alreadyWanted || alreadyVisited || loading) && s.buttonFull]}
                onPress={() => !loading && onPressSheet()}
              >
                <View style={[s.buttonWithIcon]}>
                  <Text style={[s.buttonText, (alreadyWanted || alreadyVisited || loading) && s.buttonWithIconText]}>
                    {loading ? t('utils:loading') : alreadyWanted ? t('utils:want') : t('utils:visited')}
                  </Text>
                  <Icon name="more-horizontal" style={s.buttonIcon} size={18} color={colors.black} />
                </View>
              </TouchableHighlight>
            )}
          </View>
        </View>
        <View style={s.section}>
          <Text style={s.sectionTitle}>{t('utils:location')}</Text>
          <Pressable
            onPress={() =>
              navigation.navigate('Map', {
                item: currentCity,
              })
            }
          >
            <MapView
              style={s.minimap}
              pitchEnabled={false}
              scrollEnabled={false}
              zoomControlEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              provider={PROVIDER_GOOGLE}
              mapType="standard"
              moveOnMarkerPress={false}
              pointerEvents="none"
              customMapStyle={mapGfxStyle}
              initialRegion={{
                latitude: Number(currentCity.latitude),
                longitude: Number(currentCity.longitude),
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
              }}
            >
              <Marker
                key={currentCity.id}
                coordinate={{
                  latitude: Number(currentCity.latitude),
                  longitude: Number(currentCity.longitude),
                }}
              />
            </MapView>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
