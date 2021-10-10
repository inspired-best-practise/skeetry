import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FormWrapper } from '_app/components';
import { PLATFORM } from '_app/constants';
import { useSendSmsCodeMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { regStore } from '_app/stores';

import { s } from './styles';

export const PhoneScreen = () => {
  const { t } = useTranslation();

  const [sendSmsCodeMutation, { data, loading, error }] = useSendSmsCodeMutation();

  const setPhone = regStore(state => state.setPhone);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = ({ phone }) => {
    sendSmsCodeMutation({
      variables: {
        phone,
      },
    });
  };

  useEffect(() => {
    if (data && data.sendSmsCode === true) {
      setPhone(getValues().phone);
      return navigation.push('Code');
    }
  }, [data]);

  // TODO: handle data.sendSmsCode === false

  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
        <Controller
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 12 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                placeholder={t('utils:phone')}
                spellCheck={false}
                keyboardType={PLATFORM.IS_ANDROID ? 'numeric' : 'number-pad'}
              />
            </View>
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && (
          <Text style={s.errorLogin}>
            {t('utils:phone')} {t('utils:is_required')}
          </Text>
        )}
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
          <Text style={s.btnLoginText}>{!loading ? t('utils:next') : t('utils:loading')}</Text>
        </TouchableOpacity>
        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaView>
  );
};
