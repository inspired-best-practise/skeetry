import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';

const HomeIndex = () => {
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
        <Text>Home</Text>
      </View>
    </>
  );
};

export const HomeIndexScreen = observer(HomeIndex);
