import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import { FormWrapper } from '_app/components';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CredentialsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, password }) => {
    console.log('username', username);
    return navigation.push('Welcome');
  };

  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder="Username"
                spellCheck={false}
              />
            </View>
          )}
          name="username"
          defaultValue=""
        />
        {errors.username && <Text style={s.errorLogin}>Username is required.</Text>}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder="Password"
                spellCheck={false}
                secureTextEntry
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={s.errorLogin}>Password is required.</Text>}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
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
