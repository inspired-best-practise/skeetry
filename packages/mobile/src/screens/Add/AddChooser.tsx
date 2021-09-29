import { useScrollToTop } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StatusBar, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, Card, HorizontalListSkeleton, ModalControl } from '_app/components';
import { PLATFORM, tBase } from '_app/constants';
import { OrderDirection, useCitiesQuery, useUsersQuery } from '_app/generated/graphql';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const AddChooserScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  // const [recommended, setRecommended] = useState();
  const [input, setInput] = useState('');

  // const {
  //   data: dataRecommended,
  //   loading: loadingRecommended,
  //   error: errorRecommended,
  //   fetchMore: fetchMoreRecommended,
  // } = usePopularQuery({
  //   variables: {
  //     first: 10,
  //     orderBy: {
  //       direction: OrderDirection.Desc,
  //     },
  //   },
  //   notifyOnNetworkStatusChange: true,
  // });

  const {
    data: dataSearch,
    loading: loadingSearch,
    error: errorSearch,
    fetchMore: fetchMoreSearch,
  } = useCitiesQuery({
    variables: {
      first: 10,
      query: input,
      orderBy: {
        direction: OrderDirection.Desc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: dataUsers,
    loading: loadingUsers,
    error: errorUsers,
    fetchMore: fetchMoreUsers,
  } = useUsersQuery({
    variables: {
      first: 10,
      query: input,
      orderBy: {
        direction: OrderDirection.Desc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  // useEffect(() => {
  //   if (dataRecommended) {
  //     setRecommended(dataRecommended.popular.edges);
  //   }
  // }, [dataRecommended]);

  // const recommendedEndReached = async () => {
  //   if (recommended) {
  //     const lastRecommended = recommended[recommended.length - 1].node.id;
  //     const newData = await fetchMoreRecommended({
  //       variables: {
  //         first: 10,
  //         after: lastRecommended,
  //         orderBy: {
  //           direction: OrderDirection.Desc,
  //         },
  //       },
  //     });
  //     setRecommended(prevState => [...prevState, ...newData.data.popular.edges]);
  //   }
  // };

  const handleChange = async value => {
    setInput(value);
  };

  useScrollToTop(ref);

  const searchList = dataSearch?.cities.edges;
  const usersList = dataUsers?.users.edges;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={s.container}>
        <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
        {PLATFORM.IS_IOS && <ModalControl />}

        <View style={s.containerWrap}>
          <View style={{ paddingHorizontal: normalize(20), marginBottom: normalize(10) }}>
            <View style={s.textInputWrapper}>
              <TextInput
                style={s.input}
                autoCapitalize="none"
                placeholder="Search"
                spellCheck={false}
                onChangeText={handleChange}
              />
            </View>
          </View>

          {input.length !== 0 && (
            <View>
              {loadingSearch && <HorizontalListSkeleton size="small" />}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 20 }}
              >
                {searchList?.length !== 0 ? (
                  searchList?.map(i => (
                    <View key={i.node.id} style={{ marginRight: 20 }}>
                      <Card item={i.node} size="small" />
                    </View>
                  ))
                ) : (
                  <Text>No cities found</Text>
                )}
              </ScrollView>
              {loadingUsers && <HorizontalListSkeleton size="small" />}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center', padding: 20 }}
              >
                {usersList?.length !== 0 ? (
                  usersList?.map(i => (
                    <TouchableOpacity key={i.node.id} activeOpacity={0.7}>
                      <View style={{ marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar src={i.node.avatar} nickname={i.node.username} />
                        <Text style={[tBase, { paddingLeft: 10 }]}>{i.node.username}</Text>
                        {/* <Card item={i.node} size="small" /> */}
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text>No travelers found</Text>
                )}
              </ScrollView>
            </View>
          )}

          {/* {!errorRecommended && (
            <HorizontalCardList
              title={`${t('search:recommended')}`}
              data={recommended}
              size="small"
              handleEndReached={recommendedEndReached}
              loading={loadingRecommended}
            />
          )} */}
          {/* Tags component */}
          {/* <ScrollView contentContainerStyle={s.contentContainer} horizontal showsHorizontalScrollIndicator={false}>
          {tagsMock.map(t => (
            <TouchableHighlight key={t.id} style={s.tag} underlayColor="#DDDDDD" onPress={() => {}}>
              <Text>{t.title}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView> */}
          {/* Tags component end */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
