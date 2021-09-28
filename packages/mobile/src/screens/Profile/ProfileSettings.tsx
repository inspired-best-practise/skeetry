import { useActionSheet } from '@expo/react-native-action-sheet';
import React from 'react';
import { View, Text, StatusBar, ActionSheetIOS, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { Avatar, ModalControl } from '_app/components';
import { PLATFORM, tBase, tTitle } from '_app/constants';
import { useMeQuery, useUpdateAvatarMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const ProfileSettingsScreen = () => {
  const setLogout = authStore(state => state.setLogout);

  const {
    loading: loadingMe,
    data: dataMe,
    error: errorMe,
    refetch: refetchMe,
  } = useMeQuery({
    fetchPolicy: 'no-cache',
  });
  const [updateAvatar, { loading, data, error }] = useUpdateAvatarMutation();

  const { showActionSheetWithOptions } = useActionSheet();

  const logout = () => {
    setLogout();
    navigation.goBack();
  };

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: ['Отмена', 'Сделать фото', 'Выбрать из галлереи', 'Удалить текущее фото'],
            destructiveButtonIndex: 3,
            cancelButtonIndex: 0,
            userInterfaceStyle: 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              navigation.push('Camera');
            } else if (buttonIndex === 2) {
              launchImageLibrary(
                { mediaType: 'photo', includeBase64: true },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    console.log(assets[0].base64);
                    return updateAvatar({
                      variables: {
                        base64: assets[0].base64,
                      },
                    });
                  }
                },
              );
            } else if (buttonIndex === 3) {
              updateAvatar({
                variables: {
                  remove: true,
                },
              }).then(() => refetchMe());
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: ['Отмена', 'Сделать фото', 'Выбрать из галлереи', 'Удалить текущее фото'],
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
          },
          i => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              navigation.push('Camera');
            } else if (i === 2) {
              launchImageLibrary(
                { mediaType: 'photo', includeBase64: true },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    console.log(assets[0].base64);
                    return updateAvatar({
                      variables: {
                        base64: assets[0].base64,
                      },
                    });
                  }
                },
              );
            } else if (i === 3) {
              updateAvatar({
                variables: {
                  remove: true,
                },
              });
              refetchMe();
            }
          },
        );
  };

  if (loadingMe) {
    return (
      <View style={s.container}>
        <Text style={[tTitle, { textAlign: 'center', marginBottom: 20 }]}>Loading</Text>
      </View>
    );
  }

  const user = dataMe!.me;

  return (
    <View style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}
      <View style={s.containerWrap}>
        {PLATFORM.IS_IOS && <Text style={[tTitle, { textAlign: 'center', marginBottom: 20 }]}>Настройки</Text>}
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPressSheet()}>
          <Avatar src={user.avatar} nickname={user.username} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout()} activeOpacity={1} style={{ marginTop: 20 }}>
          <Text style={tBase}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
