import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { View, Text, FlatList, RefreshControl, Pressable, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Icon from 'react-native-heroicons/solid';
import { SharedElement } from 'react-navigation-shared-element';

import { AccountStatsItem, Avatar, AccountFilter } from '_app/components';
import { useMeQuery } from '_app/generated/graphql';
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

const renderHeader = (user: TUser, setLogout: () => void) => (
  <View>
    <View style={s.accountPanel}>
      <Icon.CogIcon onPress={() => setLogout()} size={20} color={'#777'} />
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
      <AccountStatsItem name="Place" number={0} />
      <AccountStatsItem name="Want" number={user.wantedCount} />
      <AccountStatsItem name="Visited" number={user.visitedCount} />
      <AccountStatsItem name="Gallery" number={0} />
    </View>
    <AccountFilter />
  </View>
);

export const AccountScreen = () => {
  const ref = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, error, refetch } = useMeQuery({ fetchPolicy: 'no-cache' });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    wait(500).then(() => setRefreshing(false));
  }, [refetch]);

  const setLogout = authStore(state => state.setLogout);

  useScrollToTop(ref);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error: {error.message}. Try later...</Text>
      </SafeAreaView>
    );
  }

  const user = data!.me;

  return (
    <>
      <View style={{ height: 45, backgroundColor: '#fff' }} />
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader(user, setLogout)}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100, marginTop: 10 }}
        columnWrapperStyle={s.cardList}
        data={mockCountriesPopular}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </>
  );
};
