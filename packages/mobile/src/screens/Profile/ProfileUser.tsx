import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, useColorScheme } from 'react-native';

import { ModalWrapper } from '_app/components';
import { useWantedQuery, OrderDirection, useVisitedQuery } from '_app/generated/graphql';
import { authStore, profileStore } from '_app/stores';
import { SCREEN_WIDTH } from '_app/utils/dimensions';

import { renderEmpty, renderItem, renderHeader } from './elements';
import { s } from './styles';

export const ProfileUserScreen = ({ route }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const theme = useColorScheme();

  const [wanted, setWanted] = useState([]);
  const [visited, setVisited] = useState([]);

  const { user } = route.params;

  const me = authStore(state => state.user);

  const isMe = me.id === user.id;

  const {
    data: dataWanted,
    loading: loadingWanted,
    error: errorWanted,
    refetch: refetchWanted,
    fetchMore: fetchMoreWanted,
  } = useWantedQuery({
    variables: {
      userId: user.id,
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
          userId: user.id,
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
      userId: user.id,
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
          userId: user.id,
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

  const selected = profileStore(state => state.selected);
  const setSelected = profileStore(state => state.setSelected);

  const getData = () => {
    switch (selected) {
      case 'want':
        return wanted;
      case 'visited':
        return visited;

      default:
        break;
    }
  };

  return (
    <ModalWrapper>
      <FlatList
        ref={ref}
        ListHeaderComponent={renderHeader(user, t, setSelected, isMe, theme)}
        ListEmptyComponent={renderEmpty(t)}
        numColumns={2}
        data={getData()}
        columnWrapperStyle={s.listWrapper}
        contentContainerStyle={{ width: SCREEN_WIDTH }}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onEndReached={() => (selected === 'want' ? wantedEndReached() : visitedEndReached())}
      />
    </ModalWrapper>
  );
};
