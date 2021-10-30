import React from 'react';
import { TextInput, useColorScheme, View, Text } from 'react-native';

import { colors, darkColor, radius, whiteColor } from '_app/constants';

import { s } from './styles';

export const Input = ({ onBlur, onChange, value, placeholder }) => {
  const theme = useColorScheme();

  return (
    <View style={s.inputGroup}>
      <Text style={[theme === 'dark' ? whiteColor : darkColor]}>{placeholder}</Text>
      <View style={s.textInputWrapper}>
        <TextInput
          style={[
            s.input,
            theme === 'dark' && { backgroundColor: colors.gray800, borderRadius: radius.base, color: colors.white },
          ]}
          autoCapitalize="none"
          placeholder={placeholder}
          spellCheck={false}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      </View>
    </View>
  );
};
