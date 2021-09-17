import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import { FormWrapper } from '_app/components';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CodeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ code }) => {
    console.log('code', code);
    return navigation.push('Credentials');
  };

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
                placeholder="Code"
                spellCheck={false}
              />
            </View>
          )}
          name="code"
          defaultValue=""
        />
        {errors.code && <Text style={s.errorLogin}>Code is required.</Text>}
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
