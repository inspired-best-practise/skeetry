import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { FormWrapper } from '_app/components';
import { PLATFORM } from '_app/constants';
import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const PhoneScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ phone }) => {
    console.log('phone', phone);
    return navigation.push('Code');
  };

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
                placeholder="Phone"
                spellCheck={false}
                keyboardType={PLATFORM.IS_ANDROID ? 'numeric' : 'number-pad'}
              />
            </View>
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && <Text style={s.errorLogin}>Phone is required.</Text>}
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
