import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button, ModalControl } from '_app/components';
import { s } from './styles';

export const LoginOrSignup = () => {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />
      <Text style={s.title}>Log in or sign up</Text>
      <Text style={s.description}>
        Log in or register a new account to {'\n'}save your collection and gain {'\n'}access to all features
      </Text>
      <Button title="Continue with Apple" />
      <Button title="Continue with Facebook" />
      <Button title="Continue with Twitter" />
      <Button title="Phone number" />
      <Text style={s.terms}>By registering or skipping this step you agree to {'\n'}Terms of Service</Text>
    </View>
  );
};
