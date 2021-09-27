import React, { useRef } from 'react';
import { View, Alert, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { navigation } from '_app/services/navigations';
import { SCREEN_HEIGHT } from '_app/utils/dimensions';

import { s } from './styles';

export const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      try {
        const data = await cameraRef.current.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
        navigation.goBack();
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        navigation.goBack();
        return;
      }
    }
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={{ height: SCREEN_HEIGHT / 2 }}>
        <RNCamera
          ref={cameraRef}
          style={s.preview}
          captureAudio={false}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TouchableOpacity activeOpacity={0.7} onPress={takePicture} style={s.capture}>
          <View style={s.circle} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
