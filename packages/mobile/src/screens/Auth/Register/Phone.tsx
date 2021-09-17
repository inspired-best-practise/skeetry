import React from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { FormWrapper } from '_app/components';
import { PLATFORM } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const PhoneScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
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
      </FormWrapper>
    </SafeAreaView>
  );
};
