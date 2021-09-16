import React from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { ProfileStatsItem, Avatar, ProfileFilter } from '_app/components';
import { navigation } from '_app/services/navigations';

import { s } from '../styles';

export const renderHeader = (user: TUser, t, setSelected) => {
  return (
    <View>
      <View style={[s.profilePanel, { alignItems: 'center' }]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ProfileSettings')}>
          {/* TODO: color fron constants */}
          <Icon name="settings" size={24} color={'rgba(0,0,0, 0.15)'} />
        </TouchableWithoutFeedback>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('AddChooser')} style={{ marginRight: 10 }}>
            {/* TODO: color fron constants */}
            <Icon name="bar-chart" size={24} color={'rgba(0,0,0, 0.15)'} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('AddChooser')}>
            {/* TODO: color fron constants */}
            <Icon name="share" size={20} color={'rgba(0,0,0, 0.15)'} />
          </TouchableWithoutFeedback>
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
