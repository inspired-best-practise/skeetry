import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { ModalControl } from '_app/components';
import { PLATFORM, tBase, tTitle } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const ProfileSettingsScreen = () => {
  const setLogout = authStore(state => state.setLogout);

  const logout = () => {
    setLogout();
    navigation.goBack();
  };

  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}

      <View style={s.containerWrap}>
        {PLATFORM.IS_IOS && <Text style={[tTitle, { textAlign: 'center' }]}>Настройки</Text>}
        <TouchableOpacity onPress={() => logout()} activeOpacity={1} style={{ marginTop: 10 }}>
          <Text style={tBase}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
