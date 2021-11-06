import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FormWrapper } from '_app/components';
import { colors, whiteColor } from '_app/constants';
import { useConfirmSmsCodeMutation, useSendSmsCodeMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { useRegState } from '_app/states';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const CodeScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

  const CELL_COUNT = 4;
  const resendInterval = 60;

  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(resendInterval);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [confirmSmsCodeMutation, { data, loading, error }] = useConfirmSmsCodeMutation();

  const [sendSmsCodeMutation, { data: dataResend, loading: loadingResend, error: errorResend }] =
    useSendSmsCodeMutation();

  const { phone, setCode } = useRegState();

  const onSubmit = value => {
    if (phone && value.length === CELL_COUNT) {
      confirmSmsCodeMutation({
        variables: {
          phone,
          code: value,
        },
      });
    }
  };

  useEffect(() => {
    let countdown = setInterval(() => {
      setTimer(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (data && data.confirmSmsCode === true) {
      setCode(value);
      return navigation.push('Credentials');
    }
  }, [data]);

  // TODO: handle data.confirmSmsCode === false

  const resendCode = async () => {
    if (timer === 0) {
      await sendSmsCodeMutation({
        variables: {
          phone,
        },
      });
    }

    setTimer(resendInterval);
  };

  useEffect(() => {
    if (dataResend?.sendSmsCode === true) {
      Alert.alert(t('auth:code_sent'));
    }
  }, [dataResend]);

  console.log('phone', phone);

  return (
    <SafeAreaView style={s.container}>
      <FormWrapper>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={s.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                s.cell,
                theme === 'dark' && whiteColor,
                isFocused && s.focusCell,
                theme === 'dark' && isFocused && { borderColor: colors.white },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {timer !== 0 && (
          <Text style={[{ padding: normalize(10) }, theme === 'dark' && whiteColor]}>
            Запросить код повторно можно через {timer}
          </Text>
        )}
        {timer === 0 && (
          <TouchableOpacity activeOpacity={0.8} style={[{ padding: normalize(10) }]} onPress={() => resendCode()}>
            <Text style={[theme === 'dark' && whiteColor]}>Отправить код повторно</Text>
          </TouchableOpacity>
        )}
        {value.length === CELL_COUNT && (
          <TouchableOpacity
            onPress={() => onSubmit(value)}
            activeOpacity={0.6}
            disabled={loading}
            // eslint-disable-next-line react-native/no-inline-styles
            style={[
              {
                ...s.btnLogin,
                opacity: 1,
              },
              theme === 'dark' && { backgroundColor: colors.gray800 },
            ]}
          >
            <Text style={s.btnLoginText}>{!loading ? t('utils:next') : t('utils:loading')}</Text>
          </TouchableOpacity>
        )}

        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaView>
  );
};
