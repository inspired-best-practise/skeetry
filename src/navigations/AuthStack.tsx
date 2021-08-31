import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
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
      <Stack.Screen
        component={RegisterScreen}
        name="Register"
        options={{
          headerShown: true,
          headerTintColor: '#000',
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
      <Stack.Screen component={WelcomeScreen} name="Welcome" />
    </Stack.Navigator>
  );
};

export default AuthStack;
