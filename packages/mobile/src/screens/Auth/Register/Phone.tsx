import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { PLATFORM } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const PhoneScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={s.centerContainer}>
            <View style={s.loginForm}>
              <View style={s.textInputWrapper}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Phone"
                  style={s.input}
                  spellCheck={false}
                  keyboardType={PLATFORM.IS_ANDROID ? 'numeric' : 'number-pad'}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.push('Code')}
                activeOpacity={0.6}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...s.btnLogin,
                  opacity: 1,
                }}
              >
                <Text style={s.btnLoginText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
