import React from 'react';
import { View, Text } from 'react-native';

import { s } from '_app/components/LoadingOverlay/styles';

export const WelcomeScreen = () => {
  return (
    <View style={s.container}>
      <Text>Welcome!</Text>
    </View>
  );
};
