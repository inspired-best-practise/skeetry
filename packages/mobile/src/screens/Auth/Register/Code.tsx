import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CodeScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={s.centerContainer}>
            <View style={s.loginForm}>
              <View style={s.textInputWrapper}>
                <TextInput autoCapitalize="none" placeholder="Code" style={s.input} spellCheck={false} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.push('Credentials')}
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
