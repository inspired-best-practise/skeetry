import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { ModalControl } from '_app/components';
import { colors, h4, paragraph } from '_app/constants';
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
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />

      <View style={s.containerWrap}>
        <Text style={[h4, { textAlign: 'center' }]}>Настройки</Text>
        <TouchableOpacity onPress={() => logout()} activeOpacity={1} style={{ marginTop: 10 }}>
          <Text style={[paragraph, { color: colors.accent, fontWeight: '600' }]}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
