import { ApolloError } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { FormWrapper } from '_app/components';
import { tLogo } from '_app/constants';
import { useLoginMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';

import { s } from './styles';

export const LoginScreen = () => {
  const { t } = useTranslation();

  const [hidePassword, setHidePassword] = useState(true);
  const [errorLogin, setErrorLogin] = useState<ApolloError>();

  const setTokens = authStore(state => state.setTokens);
  const setUser = authStore(state => state.setUser);
  const setLogin = authStore(state => state.setLogin);

  const [login, { loading, data, error }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, password }) =>
    login({
      variables: {
        input: {
          username,
          password,
        },
      },
    });

  useEffect(() => {
    setErrorLogin(error);
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log(data.login.user);
      const { accessToken, refreshToken } = data.login;
      const { id, phone, username, name, avatar, bio, rating, wantedCount, visitedCount, createdAt, updatedAt } =
        data.login.user;

      setTokens(accessToken, refreshToken);
      setUser(id, phone, username, name, avatar, bio, rating, wantedCount, visitedCount, createdAt, updatedAt);
      setLogin();
    }
  }, [data]);

  return (
    <SafeAreaView>
      <FormWrapper verticalOffset={-40}>
        <Text style={[tLogo, s.formTitle]}>Skeetry</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder={t('utils:username')}
                spellCheck={false}
              />
            </View>
          )}
          name="username"
          defaultValue=""
        />
        {errors.username && (
          <Text style={s.errorLogin}>
            {t('utils:username')} {t('utils:is_required')}
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder={t('utils:password')}
                spellCheck={false}
                secureTextEntry
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={s.errorLogin}>
            {t('utils:password')} {t('utils:is_required')}
          </Text>
        )}
        <TouchableOpacity onPress={() => navigation.push('ForgotPassword')} style={s.forgotPassword} activeOpacity={1}>
          <Text style={s.forgotPasswordText}>{t('utils:forgot_password')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
          activeOpacity={0.6}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...s.btnLogin,
            opacity: 1,
          }}
        >
          <Text style={s.btnLoginText}>{!loading ? t('utils:login') : t('utils:loading')}</Text>
        </TouchableOpacity>
        <Text style={[s.errorLogin, errorLogin ? { opacity: 1, textAlign: 'center' } : { opacity: 0 }]}>
          {errorLogin && errorLogin.message}
        </Text>
      </FormWrapper>
      <TouchableOpacity onPress={() => navigation.push('Phone')} activeOpacity={1} style={s.registerWrapper}>
        <Text style={s.registerWrapperText}>
          <Text style={s.registerWrapperTextBold}>{t('utils:no_account')}</Text> {t('utils:register_now')}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
