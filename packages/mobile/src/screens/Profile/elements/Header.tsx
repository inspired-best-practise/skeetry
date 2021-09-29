import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
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

        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('AddChooser')} style={{ marginRight: 10 }}>
            <Icon name="bar-chart" size={24} color={'rgba(0,0,0, 0.15)'} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('AddChooser')}>
            <Icon name="share" size={20} color={'rgba(0,0,0, 0.15)'} />
          </TouchableWithoutFeedback>
        </View> */}
      </View>
      <View style={s.profileHeader}>
        <Text style={s.name}>{user.username}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            user.avatar &&
            navigation.push('Avatar', {
              image: user.avatar,
            })
          }
        >
          <Avatar src={user.avatar} nickname={user.username} />
        </TouchableOpacity>
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
