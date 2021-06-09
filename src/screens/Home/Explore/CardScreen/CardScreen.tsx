import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
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
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </SharedElement>
      <Text onPress={() => navigation.goBack()}>Back</Text>
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
