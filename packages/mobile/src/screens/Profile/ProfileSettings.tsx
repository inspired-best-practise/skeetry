import { useActionSheet } from '@expo/react-native-action-sheet';
import { ReactNativeFile } from 'apollo-upload-client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, ActionSheetIOS, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { v4 as uuidv4 } from 'uuid';

import { Avatar, ModalControl } from '_app/components';
import { PLATFORM, tBase, tTitle } from '_app/constants';
import { useDeletePhotoMutation, useMeQuery, useUploadPhotoMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const ProfileSettingsScreen = () => {
  const { t } = useTranslation();

  const setLogout = authStore(state => state.setLogout);

  const { loading, data } = useMeQuery();
  const [uploadPhoto] = useUploadPhotoMutation();
  const [deletePhoto] = useDeletePhotoMutation();

  const { showActionSheetWithOptions } = useActionSheet();

  const logout = () => {
    setLogout();
    navigation.goBack();
  };

  const actionOptions = [
    `${t('utils:cancel')}`,
    `${t('settings:take_photo')}`,
    `${t('settings:choose_from_gallery')}`,
    `${t('settings:delete_photo')}`,
  ];

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: actionOptions,
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
                { mediaType: 'photo', maxWidth: 1024, maxHeight: 1024 },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    return uploadPhoto({
                      variables: {
                        file: new ReactNativeFile({
                          uri: assets[0].uri,
                          type: 'image/*',
                          name: uuidv4(),
                        }),
                      },
                      update: cache => {
                        cache.evict({});
                      },
                    });
                  }
                },
              );
            } else if (buttonIndex === 3) {
              deletePhoto({
                update: cache => {
                  cache.evict({});
                },
              });
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: actionOptions,
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
                { mediaType: 'photo', maxWidth: 1024, maxHeight: 1024 },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    return uploadPhoto({
                      variables: {
                        file: new ReactNativeFile({
                          uri: assets[0].uri,
                          type: 'image/*',
                          name: uuidv4(),
                        }),
                      },
                    });
                  }
                },
              );
            } else if (i === 3) {
              deletePhoto({
                update: cache => {
                  cache.evict({});
                },
              });
            }
          },
        );
  };

  const user = data!.me;

  return (
    <View style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}
      <View style={s.containerWrap}>
        {PLATFORM.IS_IOS && (
          <Text style={[tTitle, { textAlign: 'center', marginBottom: 20 }]}>{t('settings:settings')}</Text>
        )}
        {!loading && (
          <TouchableOpacity activeOpacity={0.7} onPress={() => onPressSheet()}>
            <Avatar src={user.avatar} nickname={user.username} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => logout()} activeOpacity={1} style={{ marginTop: 20 }}>
          <Text style={tBase}>{t('utils:logout')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
