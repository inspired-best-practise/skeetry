import { ReactNativeFile } from 'apollo-upload-client';
import React, { useRef } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { useUpdateAvatarMutation, useUploadPhotoMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { SCREEN_HEIGHT } from '_app/utils/dimensions';

import { s } from './styles';

export const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [uploadPhoto, { loading, data, error }] = useUploadPhotoMutation();

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      try {
        const photo = await cameraRef.current.takePictureAsync(options);
        const retrievedName = photo.uri.slice(photo.uri.lastIndexOf('/'));
        await uploadPhoto({
          variables: {
            file: new ReactNativeFile({
              uri: photo.uri,
              type: 'image/*',
              name: retrievedName.slice(1),
            }),
          },
        });
        console.log('!!!', { loading, data, error });
        if (!loading) {
          navigation.goBack();
        }
      } catch (err) {
        console.log('???', err.message || err);
        console.log({ loading, data, error });
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        navigation.goBack();
        return;
      }
    }
  };

  return (
    <View style={s.container}>
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
    </View>
  );
};
