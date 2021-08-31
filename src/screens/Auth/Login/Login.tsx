import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allowLogin, setAllowLogin] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={s.container}>
      <View style={s.centerContainer}>
        <View style={s.loginForm}>
          <View style={s.textInputWrapper}>
            <TextInput autoCapitalize="none" placeholder="Username" style={s.input} />
          </View>
          <View style={s.textInputWrapper}>
            <TextInput secureTextEntry autoCapitalize="none" placeholder="Password" style={s.input} />
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
              console.log('onLogin');
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
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Register')} activeOpacity={1} style={s.registerWrapper}>
        <Text style={s.registerWrapperText}>
          <Text style={s.registerWrapperTextBold}>Don't have account?</Text> Register now.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
