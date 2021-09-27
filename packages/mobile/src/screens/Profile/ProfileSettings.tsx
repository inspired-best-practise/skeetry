import { useActionSheet } from '@expo/react-native-action-sheet';
import React from 'react';
import { View, Text, StatusBar, ActionSheetIOS, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';

import { Avatar, ModalControl } from '_app/components';
import { PLATFORM, tBase, tTitle } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const ProfileSettingsScreen = () => {
  const setLogout = authStore(state => state.setLogout);
  const unsetUser = authStore(state => state.unsetUser);
  const user = authStore(state => state.user);

  const { showActionSheetWithOptions } = useActionSheet();

  const logout = () => {
    setLogout();
    unsetUser();
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
              launchImageLibrary({ mediaType: 'photo' }, ({ didCancel, errorCode, errorMessage, assets }) =>
                Alert.alert(
                  `didCancel: ${didCancel}, errorCode: ${errorCode}, errorMessage: ${errorMessage}, assets: ${assets}`,
                ),
              );
            } else if (buttonIndex === 3) {
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
              launchImageLibrary({ mediaType: 'photo' }, ({ didCancel, errorCode, errorMessage, assets }) =>
                Alert.alert(
                  `didCancel: ${didCancel}, errorCode: ${errorCode}, errorMessage: ${errorMessage}, assets: ${assets}`,
                ),
              );
            }
          },
        );
  };

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
