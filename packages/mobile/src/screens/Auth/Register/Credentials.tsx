import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import { FormWrapper } from '_app/components';
import { useSignupMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { authStore, regStore } from '_app/stores';

import { s } from './styles';

export const CredentialsScreen = () => {
  const [signupMutation, { data, loading, error }] = useSignupMutation();

  const setTokens = authStore(state => state.setTokens);
  const setUser = authStore(state => state.setUser);

  const phone = regStore(state => state.phone);
  const code = regStore(state => state.code);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, password }) => {
    signupMutation({
      variables: {
        input: {
          phone,
          username,
          password,
          code,
        },
      },
    });
  };

  useEffect(() => {
    if (data && data.signup) {
      const { accessToken, refreshToken } = data.signup;
      const { id, username: name, avatar, wantedCount, visitedCount, createdAt, updatedAt } = data.signup.user;

      setTokens(accessToken, refreshToken);
      setUser(id, phone, name, avatar, wantedCount, visitedCount, createdAt, updatedAt);

      return navigation.push('Welcome');
    }
  }, [data]);

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
          disabled={loading}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...s.btnLogin,
            opacity: 1,
          }}
        >
          <Text style={s.btnLoginText}>{!loading ? 'Next' : 'Loading...'}</Text>
        </TouchableOpacity>
        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaView>
  );
};
