import { useActionSheet } from '@expo/react-native-action-sheet';
import { useScrollToTop } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, RefreshControl, useColorScheme } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { darkBg, tBase, whiteBg, whiteColor } from '_app/constants';
import { OrderDirection, useMeQuery, useVisitedQuery, useWantedQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { signOut } from '_app/utils/authentication';

import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const ProfileScreen = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const theme = useColorScheme();

  const { showActionSheetWithOptions } = useActionSheet();
  const [refreshing, setRefreshing] = useState(false);
  const [wanted, setWanted] = useState([]);
  const [visited, setVisited] = useState([]);

  const { loading, data, error, refetch } = useMeQuery();

  const {
    data: dataWanted,
    loading: loadingWanted,
    error: errorWanted,
    refetch: refetchWanted,
    fetchMore: fetchMoreWanted,
  } = useWantedQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataWanted && wanted.length === 0) {
      setWanted(dataWanted.wanted.edges);
    }
  }, [dataWanted]);

  const wantedEndReached = async () => {
    if (wanted) {
      const lastWanted = wanted[wanted.length - 1].node.id;
      const newData = await fetchMoreWanted({
        variables: {
          first: 5,
          after: lastWanted,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setWanted(prevState => [...prevState, ...newData.data.wanted.edges]);
    }
  };

  const {
    data: dataVisited,
    loading: loadingVisited,
    error: errorVisited,
    refetch: refetchVisited,
    fetchMore: fetchMoreVisited,
  } = useVisitedQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataVisited && visited.length === 0) {
      setVisited(dataVisited.visited.edges);
    }
  }, [dataVisited]);

  const visitedEndReached = async () => {
    if (wanted) {
      const lastVisited = visited[visited.length - 1].node.id;
      const newData = await fetchMoreVisited({
        variables: {
          first: 5,
          after: lastVisited,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setVisited(prevState => [...prevState, ...newData.data.visited.edges]);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    true && refetchWanted();
    true && refetchVisited();
    setRefreshing(false);
  }, [refetch, refetchWanted, refetchVisited]);

  useScrollToTop(ref);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const logOut = async () => {
    await signOut();
    navigation.navigate('AuthStack');
  };

  if (error || errorWanted || errorVisited) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error. Please try later...</Text>
        <TouchableWithoutFeedback style={{ margin: 10 }} onPress={() => logOut()}>
          <Text style={[tBase, theme === 'dark' && whiteColor]}>Logout</Text>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }

  const user = data!.me;

  const isMe = true;

  const getData = () => {
    switch ('want') {
      case 'want':
        return wanted;
      case 'visited':
        return visited;

      default:
        break;
    }
  };

  return (
    <FlatList
      ref={ref}
      ListHeaderComponent={renderHeader(user, t, isMe, theme, { route: null }, showActionSheetWithOptions)}
      ListEmptyComponent={renderEmpty(t, theme)}
      numColumns={2}
      horizontal={false}
      data={getData()}
      columnWrapperStyle={s.listWrapper}
      contentContainerStyle={{}}
      renderItem={renderItem}
      keyExtractor={item => item.node.id}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      onEndReached={() => (true ? wantedEndReached() : visitedEndReached())}
    />
  );
};
