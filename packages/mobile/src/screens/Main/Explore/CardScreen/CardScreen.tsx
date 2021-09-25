import { useActionSheet } from '@expo/react-native-action-sheet';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableHighlight, StatusBar, Pressable, ActionSheetIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

import { mapGfxStyle, PLATFORM } from '_app/constants';
import { useAddCityMutation, useCityQuery, useMoveCityMutation, useRemoveCityMutation } from '_app/generated/graphql';
import { authStore } from '_app/stores';

import { s } from './styles';

// TODO: refactor mutations and conditions, split into different components and files
export const CardScreen = ({ route, navigation }) => {
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
              'Cancel',
              `Move to ${alreadyWanted ? 'Visited' : 'Want'}`,
              `Remove from ${alreadyWanted ? 'Want' : 'Visited'}`,
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
              'Cancel',
              `Move to ${alreadyWanted ? 'Visited' : 'Want'}`,
              `Remove from ${alreadyWanted ? 'Want' : 'Visited'}`,
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
      <Image
        style={s.cardImage}
        source={{
          uri: currentCity.photos
            ? currentCity.photos[0]
            : 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
        }}
        resizeMode="cover"
      />
      {/* {PLATFORM.IS_ANDROID && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Animated.View style={[s.backIcon, { opacity: fadeAnim }]}>
            <Icon.XIcon size={18} color={'black'} />
          </Animated.View>
        </TouchableWithoutFeedback>
      )} */}
      <View style={s.content}>
        <View style={s.section}>
          <Text style={s.name}>{currentCity.state.country.emoji + ' ' + currentCity.name}</Text>
        </View>
        <View style={s.section}>
          <View style={s.cardButtons}>
            {!alreadyWanted && !alreadyVisited && !loading ? (
              <>
                <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => handlePress('want')}>
                  <Text style={s.buttonText}>Want</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => handlePress('visited')}>
                  <Text style={s.buttonText}>Visited</Text>
                </TouchableHighlight>
              </>
            ) : (
              <TouchableHighlight
                underlayColor="#DDDDDD"
                style={[s.button, (alreadyWanted || alreadyVisited || loading) && s.buttonFull]}
                onPress={() => !loading && onPressSheet()}
              >
                <View style={[s.buttonWithIcon]}>
                  <Text style={[s.buttonText, (alreadyWanted || alreadyVisited || loading) && s.buttonWithIconText]}>
                    {loading ? 'loading' : alreadyWanted ? 'Want' : 'Visited'}
                  </Text>
                  <Icon name="more-horizontal" style={s.buttonIcon} size={18} color={'black'} />
                </View>
              </TouchableHighlight>
            )}
          </View>
        </View>
        <View style={s.section}>
          <Text style={s.sectionTitle}>Where you'll be</Text>
          <Pressable onPress={() => navigation.navigate('AddChooser')}>
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
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
              }}
            />
          </Pressable>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Description</Text>
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
      </View>
    </ScrollView>
  );
};
