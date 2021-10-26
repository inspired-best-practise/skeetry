import React from 'react';
import { Keyboard, SafeAreaView, StatusBar, TouchableWithoutFeedback, View } from 'react-native';

import { ModalControl } from '_app/components/ModalControl';
import { PLATFORM } from '_app/constants';

import { s } from './styles';

export const ModalWrapper = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={s.container}>
        <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
        {PLATFORM.IS_IOS && <ModalControl />}
        <View style={s.wrap}>{children}</View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
