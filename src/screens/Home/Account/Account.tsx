import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { AccountStatsItem, Avatar } from '_app/components';
import { s } from './styles';

const Account = () => {
  const avatarSrcMock = 'https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-500w.jpeg';

  return (
    <View style={s.container}>
      <View style={s.accountHeader}>
        <Text style={s.name}>Mike</Text>
        <Avatar src={avatarSrcMock} nickname="mike" />
      </View>
      <View style={s.accountStats}>
        <AccountStatsItem name="Place" number="5512" isPlace />
        <AccountStatsItem name="Want" number="45" />
        <AccountStatsItem name="Visited" number="20" />
        <AccountStatsItem name="Gallery" number="120" />
      </View>
    </View>
  );
};

export const AccountScreen = observer(Account);
