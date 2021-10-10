import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FormWrapper } from '_app/components';
import { useConfirmSmsCodeMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { regStore } from '_app/stores';

import { s } from './styles';

export const CodeScreen = () => {
  const { t } = useTranslation();

  const [confirmSmsCodeMutation, { data, loading, error }] = useConfirmSmsCodeMutation();

  const phone = regStore(state => state.phone);
  const setCode = regStore(state => state.setCode);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = ({ code }) => {
    confirmSmsCodeMutation({
      variables: {
        phone,
        code,
      },
    });
  };

  useEffect(() => {
    if (data && data.confirmSmsCode === true) {
      setCode(getValues().code);
      return navigation.push('Credentials');
    }
  }, [data]);

  // TODO: handle data.confirmSmsCode === false

  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
        <Controller
          control={control}
          rules={{ required: true, minLength: 4, maxLength: 4 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder={t('utils:code')}
                spellCheck={false}
              />
            </View>
          )}
          name="code"
          defaultValue=""
        />
        {errors.code && (
          <Text style={s.errorLogin}>
            {t('utils:code')} {t('utils:is_required')}
          </Text>
        )}
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
          <Text style={s.btnLoginText}>{!loading ? t('utils:next') : t('utils:loading')}</Text>
        </TouchableOpacity>
        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaView>
  );
};
