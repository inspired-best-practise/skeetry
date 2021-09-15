import React from 'react';
import { View, Text } from 'react-native';
import * as Icon from 'react-native-heroicons/solid';

import { ProfileStatsItem, Avatar, ProfileFilter } from '_app/components';
import { navigation } from '_app/services/navigations';
import { profileStore } from '_app/stores';

import { s } from '../styles';

export const renderHeader = (user: TUser, t, setSelected) => {
  return (
    <View>
      <View style={s.profilePanel}>
        <Icon.CogIcon onPress={() => navigation.navigate('ProfileSettings')} size={20} color={'#777'} />

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
      <View style={s.profileHeader}>
        <Text style={s.name}>{user.username}</Text>
        <Avatar src={user.avatar} nickname={user.username} />
      </View>
      <View style={s.profileStats}>
        <ProfileStatsItem name={`${t('profile:place')}`} number={0} />
        <ProfileStatsItem name={`${t('profile:want')}`} number={user.wantedCount} action={() => setSelected('want')} />
        <ProfileStatsItem
          name={`${t('profile:visited')}`}
          number={user.visitedCount}
          action={() => setSelected('visited')}
        />
        <ProfileStatsItem name={`${t('profile:trips')}`} number={0} />
      </View>
      <ProfileFilter />
    </View>
  );
};
