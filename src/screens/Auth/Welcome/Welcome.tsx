import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Welcome = () => {
  return (
    <View style={s.container}>
      <Text>Welcome!</Text>
    </View>
  );
};

export const WelcomeScreen = observer(Welcome);
