import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
  Pressable,
  ActionSheetIOS,
} from 'react-native';
import * as Icon from 'react-native-heroicons/solid';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

import { mapGfxStyle } from '_app/constants';
import { useAddItemMutation, useMoveItemMutation, useRemoveItemMutation } from '_app/generated/graphql';
import { authStore } from '_app/stores';

import { s } from './styles';

// TODO: refactor mutations and conditions, split into different components and files
export const CardScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const user = authStore(state => state.user);

  const [want, { loading: loadingWant }] = useAddItemMutation({
    variables: {
      input: {
        id: item.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [visited, { loading: loadingVisited }] = useAddItemMutation({
    variables: {
      input: {
        id: item.id,
        type: 'VISITED',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [removeWant, { loading: loadingRemoveWant }] = useRemoveItemMutation({
    variables: {
      input: {
        id: item.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [removeVisited, { loading: loadingRemoveVisited }] = useRemoveItemMutation({
    variables: {
      input: {
        id: item.id,
        type: 'VISITED',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [moveWant, { loading: loadingMoveWant }] = useMoveItemMutation({
    variables: {
      input: {
        id: item.id,
        type: 'WANT',
      },
    },
    update: cache => {
      cache.evict({});
    },
  });

  const [moveVisited, { loading: loadingMoveVisited }] = useMoveItemMutation({
    variables: {
      input: {
        id: item.id,
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

  const alreadyWanted = item.userWanted && item.userWanted.find(u => u.id === user.id);
  const alreadyVisited = item.userVisited && item.userVisited.find(u => u.id === user.id);

  const loading =
    loadingWant || loadingVisited || loadingRemoveWant || loadingRemoveVisited || loadingMoveWant || loadingMoveVisited;

  const onPressSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
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
    );

  const renderContent = () => (
    <Animated.View style={[s.content]}>
      <View style={s.section}>
        <Text style={s.name}>{item.country.flag + ' ' + item.name}</Text>
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
                <Icon.DotsHorizontalIcon style={s.buttonIcon} size={18} color={'black'} />
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
    </Animated.View>
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [650, 450], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const insets = useSafeAreaInsets();

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          style={s.cardImage}
          source={{
            uri: item.photos
              ? item.photos[0]
              : 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
          }}
          resizeMode="cover"
        />
      </SharedElement>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Animated.View style={[s.backIcon, { opacity: fadeAnim }]}>
          <Icon.XIcon size={18} color={'black'} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges}>
        {renderContent}
      </BottomSheet>
    </View>
  );
};
