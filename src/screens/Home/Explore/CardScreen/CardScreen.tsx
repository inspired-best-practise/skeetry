import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Modalize } from 'react-native-modalize';
import { SharedElement } from 'react-navigation-shared-element';
import { s } from './styles';

const CardDetailScreen = ({ route, navigation }) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const { id, imageUrl } = route.params;

  return (
    <View style={s.container}>
      <Text>Card Detail!</Text>
      <SharedElement id={id}>
        <FastImage
          style={{ width: 250, height: 300 }}
          source={{ uri: imageUrl, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </SharedElement>
      <SafeAreaView />
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
        modalTopOffset={90}
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
