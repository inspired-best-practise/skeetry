import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Account = () => {
  return (
    <View style={s.container}>
      <Text>Account!</Text>
    </View>
  );
};

export const AccountScreen = observer(Account);
