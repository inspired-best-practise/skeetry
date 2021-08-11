import React from 'react';
import { TextInput } from 'react-native';
import { View, Text, StatusBar } from 'react-native';

import { Button, ModalControl } from '_app/components';

import { s } from './styles';

export const LoginOrSignup = () => {
  return (
    // Old version
    // <View style={s.container}>
    //   <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
    //   <ModalControl />
    //   <Text style={s.title}>Log in or sign up</Text>
    //   <Text style={s.description}>
    //     Log in or register a new account to {'\n'}save your collection and gain {'\n'}access to all features
    //   </Text>
    //   <Button title="Continue with Apple" />
    //   <Button title="Continue with Facebook" />
    //   <Button title="Continue with Twitter" />
    //   <Button title="Phone number" />
    //   <Text style={s.terms}>By registering or skipping this step you agree to {'\n'}Terms of Service</Text>
    // </View>
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <Text style={s.title}>Travel</Text>
      <TextInput placeholder="Username" />
      {/* TODO: add show/hide password icon */}
      <TextInput placeholder="Password" secureTextEntry />
      <Text style={s.terms}>Forgot your password?</Text>
      <Button title="Log in" />

      <Text style={s.terms}>Don't have an account? Sign up now.</Text>
      <Text style={s.terms}>By registering or skipping this step you agree to {'\n'}Terms of Service</Text>
    </View>
  );
};
