import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { s } from '_app/components/LoadingOverlay/styles';

export const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allowLogin, setAllowLogin] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={s.container}>
      {/* <Text>Sign in page - just for now</Text> */}

      {/* <Text>Logo (img)</Text> */}
      <TextInput placeholder="Username" />
      {/* TODO: add show/hide switch with icons */}
      <TextInput placeholder="Password" />
      <Text>Forgot your password?</Text>

      <TouchableOpacity
        onPress={() => {
          console.log('onLogin');
        }}
        disabled={!allowLogin && !loading}
        activeOpacity={0.6}
        style={{
          marginTop: 7.5,
          width: '100%',
          height: 44,
          borderRadius: 5,
          backgroundColor: '#318bfb',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: allowLogin ? 1 : 0.6,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: '500',
          }}
        >
          {!loading ? 'Login' : 'Loading...'}
        </Text>
      </TouchableOpacity>

      <Text>Don't have an account? (text) Register (link)</Text>
    </View>
  );
};
