import React from 'react';
import { View, Text } from 'react-native';

export const HomeIndexScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Welcome, Mike</Text>
      </View>
    </>
  );
};
