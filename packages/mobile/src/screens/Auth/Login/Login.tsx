import { ApolloError } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useLoginMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const LoginScreen = () => {
  const [allowLogin, setAllowLogin] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [username, onChangeUsername] = useState<string>('');
  const [password, onChangePasword] = useState<string>('');
  const [errorLogin, setErrorLogin] = useState<ApolloError>();

  const setTokens = authStore(state => state.setTokens);
  const setUser = authStore(state => state.setUser);
  const setLogin = authStore(state => state.setLogin);

  const [login, { loading, data, error }] = useLoginMutation({
    variables: { input: { username, password } },
  });

  useEffect(() => {
    if (username.length !== 0 && password.length !== 0) {
      return setAllowLogin(true);
    }

    return setAllowLogin(false);
  }, [username, password]);

  useEffect(() => {
    setErrorLogin(error);
  }, [error]);

  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken } = data.login;
      const { id, phone, username: name, avatar, wantedCount, visitedCount, createdAt, updatedAt } = data.login.user;

      setTokens(accessToken, refreshToken);
      setUser(id, phone, name, avatar, wantedCount, visitedCount, createdAt, updatedAt);
      setLogin();
    }
  }, [data]);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.centerContainer}>
        <View style={s.loginForm}>
          <View style={s.textInputWrapper}>
            <TextInput autoCapitalize="none" placeholder="Username" onChangeText={onChangeUsername} style={s.input} />
          </View>
          <View style={s.textInputWrapper}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={onChangePasword}
              style={s.input}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('ForgotPassword')}
            style={s.forgotPassword}
            activeOpacity={1}
          >
            <Text style={s.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              login();
            }}
            disabled={!allowLogin && !loading}
            activeOpacity={0.6}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...s.btnLogin,
              opacity: allowLogin ? 1 : 0.6,
            }}
          >
            <Text style={s.btnLoginText}>{!loading ? 'Login' : 'Loading...'}</Text>
          </TouchableOpacity>
          {errorLogin && <Text style={s.errorLogin}>{errorLogin.message}</Text>}
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Phone')} activeOpacity={1} style={s.registerWrapper}>
        <Text style={s.registerWrapperText}>
          <Text style={s.registerWrapperTextBold}>Don't have account?</Text> Register now.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
