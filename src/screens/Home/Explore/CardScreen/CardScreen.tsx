import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
import { SharedElement } from 'react-navigation-shared-element';
import { normalize, SCREEN_WIDTH } from '_app/utils/getDimensions';
import { s } from './styles';

const CardDetailScreen = ({ route, navigation }) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const { item } = route.params;

  return (
    <View style={s.container}>
      <SharedElement id={`item.${item.id}.image`}>
        <FastImage
          style={{ width: SCREEN_WIDTH - 18 * 2, height: normalize(500), borderRadius: 6, marginBottom: 180 }}
          source={{ uri: item.imageUrl, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </SharedElement>
      <SafeAreaView />
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
        modalTopOffset={0}
        closeOnOverlayTap={false}
        withOverlay={false}
        closeSnapPointStraightEnabled={false}
        alwaysOpen={180}
        disableScrollIfPossible
        HeaderComponent={
          <View>
            <Text>Header</Text>
          </View>
        }
        withHandle={false}
      >
        <Text>...your content</Text>
      </Modalize>
    </View>
  );
};
export const CardScreen = observer(CardDetailScreen);
