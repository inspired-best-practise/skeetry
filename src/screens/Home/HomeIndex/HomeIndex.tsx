import React from 'react';
import { View, Text } from 'react-native';

import { authStore } from '_app/stores';

export const HomeIndexScreen = () => {
  const user = authStore(state => state.user);

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
        <Text>Welcome, {user.username}</Text>
      </View>
    </>
  );
};
