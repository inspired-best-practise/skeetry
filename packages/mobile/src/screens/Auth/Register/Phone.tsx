import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FormWrapper } from '_app/components';
import { colors, radius } from '_app/constants';
import { useSendSmsCodeMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { regStore } from '_app/stores';

import { s } from './styles';

export const PhoneScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const [sendSmsCodeMutation, { data, loading, error }] = useSendSmsCodeMutation();

  const setPhone = regStore(state => state.setPhone);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();
  const onSubmit = () => {
    const formattedPhone = formattedValue.replace('+', '');

    if (valid) {
      sendSmsCodeMutation({
        variables: {
          phone: formattedPhone,
        },
      });
    } else {
      setError('phone', { message: `${t('utils:wrong_phone')}` });
    }
  };

  const phone = getValues().phone;

  useEffect(() => {
    const checkValid = phoneInput.current?.isValidNumber(phone);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
  }, [phone]);

  useEffect(() => {
    if (data && data.sendSmsCode === true) {
      setPhone(phone);
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
            <PhoneInput
              ref={phoneInput}
              placeholder={t('utils:phone')}
              filterProps={{ placeholder: t('utils:enter_country_name') }}
              countryPickerProps={{
                translation: t('utils:picker_lang'),
              }}
              withDarkTheme={theme === 'dark' ? true : false}
              defaultValue={value}
              defaultCode="RU"
              layout="first"
              onChangeText={onChange}
              textInputProps={{
                onBlur,
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
              autoFocus
              // disableArrowIcon
              containerStyle={{ width: '100%', backgroundColor: colors.gray100, borderRadius: radius.base }}
              textContainerStyle={{ backgroundColor: colors.gray100, borderRadius: radius.base }}
            />
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && (
          <Text style={s.errorLogin}>
            {errors.phone.message ? errors.phone.message : `${t('utils:phone')} ${t('utils:is_required')}`}
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
