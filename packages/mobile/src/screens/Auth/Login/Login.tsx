import { ApolloError } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { FormWrapper } from '_app/components';
import { colors, darkBg, darkColor, radius, tLogo, whiteColor } from '_app/constants';
import { useLoginMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { useAuthState } from '_app/states';

import { s } from './styles';

export const LoginScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  const [hidePassword, setHidePassword] = useState(true);
  const [errorLogin, setErrorLogin] = useState<ApolloError>();

  const { setAccessToken, setRefreshToken, setMe, setLogin } = useAuthState();

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
      const { accessToken, refreshToken, user } = data.login;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setMe(user);
      setLogin();
    }
  }, [data]);

  return (
    <SafeAreaView>
      <FormWrapper verticalOffset={-40}>
        <Text style={[tLogo, s.formTitle, theme === 'dark' ? whiteColor : darkColor]}>Skeetry</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={[
                  s.input,
                  theme === 'dark' && {
                    backgroundColor: colors.gray800,
                    borderRadius: radius.base,
                    color: colors.white,
                  },
                ]}
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
                style={[
                  s.input,
                  theme === 'dark' && {
                    backgroundColor: colors.gray800,
                    borderRadius: radius.base,
                    color: colors.white,
                  },
                ]}
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
        <TouchableOpacity
          onPress={() => navigation.push('ForgotPassword')}
          style={[s.forgotPassword]}
          activeOpacity={1}
        >
          <Text style={[s.forgotPasswordText, theme === 'dark' ? whiteColor : darkColor]}>
            {t('utils:forgot_password')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
          activeOpacity={0.6}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[
            {
              ...s.btnLogin,
              opacity: 1,
            },
            theme === 'dark' ? { backgroundColor: colors.gray800 } : darkBg,
          ]}
        >
          <Text style={[s.btnLoginText, theme === 'dark' && whiteColor]}>
            {!loading ? t('utils:login') : t('utils:loading')}
          </Text>
        </TouchableOpacity>
        <Text style={[s.errorLogin, errorLogin ? { opacity: 1, textAlign: 'center' } : { opacity: 0 }]}>
          {errorLogin && errorLogin.message}
        </Text>
      </FormWrapper>
      <TouchableOpacity
        onPress={() => navigation.push('Phone')}
        activeOpacity={1}
        style={[s.registerWrapper, theme === 'dark' && { borderTopColor: colors.gray800 }]}
      >
        <Text style={[s.registerWrapperText, theme === 'dark' ? whiteColor : darkColor]}>
          <Text style={[s.registerWrapperTextBold, theme === 'dark' ? whiteColor : darkColor]}>
            {t('utils:no_account')}
          </Text>{' '}
          {t('utils:register_now')}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
