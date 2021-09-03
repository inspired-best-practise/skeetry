import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Icon from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

import { AccountStatsItem, Avatar, AccountFilter } from '_app/components';
import { navigation } from '_app/services/navigations';
import { authStore } from '_app/stores';
import { wait } from '_app/utils';

import { mockCountriesPopular } from '../Explore/mocks/mockCountriesPopular';
import { s } from './styles';

const renderItem = ({ item }: any) => (
  <Pressable onPress={() => navigation.navigate('CardScreen', { item })}>
    <View key={item.id} style={s.card}>
      <SharedElement id={`item.${item.id}.image`}>
        <FastImage
          style={s.cardImage}
          source={{ uri: item.imageUrl, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </SharedElement>
    </View>
  </Pressable>
);

export const AccountScreen = () => {
  const avatarSrcMock = 'https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-500w.jpeg';
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const user = authStore(state => state.user);
  const toggleIsAuthenticated = authStore(state => state.toggleIsAuthenticated);

  return (
    <View style={s.container}>
      <SafeAreaView />
      <View style={s.accountPanel}>
        <Icon.CogIcon onPress={() => toggleIsAuthenticated()} size={20} color={'#777'} />
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
        <Avatar src={avatarSrcMock} nickname="mike" />
      </View>
      <View style={s.accountStats}>
        <AccountStatsItem name="Place" number="5512" />
        <AccountStatsItem name="Want" number="45" />
        <AccountStatsItem name="Visited" number="20" />
        <AccountStatsItem name="Gallery" number="120" />
      </View>
      <AccountFilter />
      <FlatList
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 6 }}
        columnWrapperStyle={s.cardList}
        data={mockCountriesPopular}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};
