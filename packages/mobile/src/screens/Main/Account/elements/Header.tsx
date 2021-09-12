import React from 'react';
import { View, Text } from 'react-native';
import * as Icon from 'react-native-heroicons/solid';

import { AccountStatsItem, Avatar, AccountFilter } from '_app/components';
import { navigation } from '_app/services/navigations';
import { profileStore } from '_app/stores';

import { s } from '../styles';

export const renderHeader = (user: TUser, t, setSelected) => {
  return (
    <View>
      <View style={s.accountPanel}>
        <Icon.CogIcon onPress={() => navigation.navigate('AccountSettings')} size={20} color={'#777'} />

        <View style={{ flexDirection: 'row' }}>
          <Icon.ChartBarIcon
            style={{ marginRight: 12 }}
            onPress={() => navigation.navigate('AddChooser')}
            size={20}
            color={'#777'}
          />
          <Icon.ShareIcon onPress={() => navigation.navigate('AddChooser')} size={20} color={'#777'} />
        </View>
      </View>
      <View style={s.accountHeader}>
        <Text style={s.name}>{user.username}</Text>
        <Avatar src={user.avatar} nickname={user.username} />
      </View>
      <View style={s.accountStats}>
        <AccountStatsItem name={`${t('account:place')}`} number={0} />
        <AccountStatsItem name={`${t('account:want')}`} number={user.wantedCount} action={() => setSelected('want')} />
        <AccountStatsItem
          name={`${t('account:visited')}`}
          number={user.visitedCount}
          action={() => setSelected('visited')}
        />
        <AccountStatsItem name={`${t('account:trips')}`} number={0} />
      </View>
      <AccountFilter />
    </View>
  );
};
