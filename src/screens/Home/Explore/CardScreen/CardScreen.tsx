import React, { useEffect, useRef, useState } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import BottomSheet from 'reanimated-bottom-sheet';

import { mapGfxStyle } from '_app/constants';
import { wait } from '_app/utils';

import { s } from './styles';

export const CardScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(false);
  const [itemStatus, setItemStatus] = useState(item.status ? item.status : 'NONE');

  const onPress = (name: string) => {
    setLoading(true);
    wait(2000).then(() => setLoading(false));
    setItemStatus(name);
  };

  const onPressSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Cancel',
          `Move to ${itemStatus === 'WANT' ? 'Visited' : 'Want'}`,
          `Remove from ${itemStatus === 'WANT' ? 'Want' : 'Visited'}`,
        ],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setLoading(true);
          wait(2000).then(() => setLoading(false));
          setItemStatus(itemStatus === 'WANT' ? 'VISITED' : 'WANT');
        } else if (buttonIndex === 2) {
          setItemStatus('NONE');
        }
      },
    );

  const renderContent = () => (
    <Animated.View style={[s.content]}>
      <View style={s.section}>
        <Text style={s.name}>{item.flag + ' ' + item.name}</Text>
        {/* <View style={s.rating}>
            <Icon.StarIcon size={16} color={'black'} />
            <Text style={s.ratingNumber}>{item.rating.number}</Text>
            <Text style={s.ratingCount}>({item.rating.count})</Text>
          </View> */}
      </View>
      <View style={s.section}>
        <View style={s.cardButtons}>
          {itemStatus === 'NONE' && !loading ? (
            <>
              <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => onPress('WANT')}>
                <Text style={s.buttonText}>Want</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#DDDDDD" style={s.button} onPress={() => onPress('VISITED')}>
                <Text style={s.buttonText}>Visited</Text>
              </TouchableHighlight>
            </>
          ) : (
            <TouchableHighlight
              underlayColor="#DDDDDD"
              style={[s.button, (itemStatus !== 'NONE' || loading) && s.buttonFull]}
              onPress={() => !loading && onPressSheet()}
            >
              <View style={[s.buttonWithIcon]}>
                <Text style={[s.buttonText, (itemStatus !== 'NONE' || loading) && s.buttonWithIconText]}>
                  {loading ? 'loading' : itemStatus}
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

      {/* <Text>Reviews list</Text> */}

      {/* <Text>Cities list</Text> */}
    </Animated.View>
  );

  const sheetRef = React.useRef(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={s.container}>
      <SafeAreaView />
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          style={s.cardImage}
          source={{
            uri: item.images
              ? item.images[2].src
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={[700, 450]}
        initialSnap={1}
        enabledContentTapInteraction={true}
        enabledBottomInitialAnimation={true}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={true}
        renderContent={renderContent}
        overdragResistanceFactor={0} // ?
        enabledBottomClamp={true}
        borderRadius={10}
      />
    </View>
  );
};
