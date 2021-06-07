import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AuthStackParamList } from 'declarations';
import React from 'react';

import { ForgotPasswordScreen, LoginScreen, RegisterScreen, WelcomeScreen } from '_app/screens/Auth';

const Stack = createStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
      <Stack.Screen component={WelcomeScreen} name="Welcome" />
    </Stack.Navigator>
  );
};

export default AuthStack;
