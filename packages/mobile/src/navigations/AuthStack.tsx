import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

import {
  ForgotPasswordScreen,
  LoginScreen,
  PhoneScreen,
  CodeScreen,
  CredentialsScreen,
  WelcomeScreen,
} from '_app/screens/Auth';

const Stack = createStackNavigator<TAuthStackParamList>();
const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen
        component={PhoneScreen}
        name="Phone"
        options={{
          headerShown: true,
          headerTintColor: '#000',
        }}
      />
      <Stack.Screen
        component={CodeScreen}
        name="Code"
        options={{
          headerShown: true,
          headerTintColor: '#000',
        }}
      />
      <Stack.Screen
        component={CredentialsScreen}
        name="Credentials"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name="ForgotPassword"
        options={{
          headerShown: true,
          headerTintColor: '#000',
          headerTitle: 'Forgot Pasword',
        }}
      />
      <Stack.Screen
        component={WelcomeScreen}
        name="Welcome"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;