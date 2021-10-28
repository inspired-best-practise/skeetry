import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { UserWithRating } from '_app/components';
import { OrderDirection, useUsersQuery } from '_app/generated/graphql';

export const UsersTopScreen = () => {
  const [loadingCounter, setLoadingCount] = useState(0);
  const [users, setUsers] = useState([]);

  const { data, loading, error, fetchMore } = useUsersQuery({
    variables: {
      first: 5,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  useEffect(() => {
    if (!loading) {
      setLoadingCount(1);
    }
  }, [loading]);

  useEffect(() => {
    if (data && users.length === 0) {
      setUsers(data.users.edges);
    }
  }, [data]);

  const handleEndReached = async () => {
    if (users) {
      const lastUser = users[users.length - 1].node.id;
      const newData = await fetchMore({
        variables: {
          first: 5,
          after: lastUser,
          orderBy: {
            direction: OrderDirection.Asc,
          },
        },
      });
      setUsers(prevState => [...prevState, ...newData.data.users.edges]);
    }
  };

  const renderItem = ({ item, index }) => {
    return <UserWithRating item={item} index={index} />;
  };

  // console.log('data', data.users.edges);

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
        showsVerticalScrollIndicator={false}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};
