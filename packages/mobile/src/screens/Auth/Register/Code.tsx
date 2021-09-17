import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import { FormWrapper } from '_app/components';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CodeScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
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
      </FormWrapper>
    </SafeAreaView>
  );
};
