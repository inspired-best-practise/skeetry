import { observer } from 'mobx-react';
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
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';
import { s } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapGfxStyle } from '_app/constants';
import BottomSheet from 'reanimated-bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-heroicons/solid';
import { wait } from '_app/utils';

const CardDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(false);
  const [itemStatus, setItemStatus] = useState(item.status);

  const onPress = (name: string) => {
    setLoading(true);
    wait(2000).then(() => setLoading(false));
    setItemStatus(name);
  };

  const renderContent = () => (
    <Animated.View style={[s.content]}>
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
              onPress={() => {}}
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
        <Image style={s.cardImage} source={{ uri: item.images[2].src }} resizeMode="cover" />
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

export const CardScreen = observer(CardDetailScreen);
