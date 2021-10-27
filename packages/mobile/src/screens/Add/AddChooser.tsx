import { useScrollToTop } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView, TextInput, Text, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native';

import { Avatar, Card, HorizontalListSkeleton } from '_app/components';
import { colors, darkColor, radius, tBase, whiteColor } from '_app/constants';
import { OrderDirection, useCitiesQuery, useUsersQuery } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const AddChooserScreen = () => {
  const { t } = useTranslation();
  const theme = useColorScheme();

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
  //     first: 5,
  //     orderBy: {
  //       direction: OrderDirection.Desc,
  //     },
  //   },
  //   notifyOnNetworkStatusChange: true,
  // });

  const { data: dataSearch, loading: loadingSearch } = useCitiesQuery({
    variables: {
      first: 5,
      query: input,
      orderBy: {
        direction: OrderDirection.Desc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const { data: dataUsers, loading: loadingUsers } = useUsersQuery({
    variables: {
      first: 5,
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
  //         first: 5,
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
    <SafeAreaView>
      <View style={{ paddingHorizontal: normalize(20) }}>
        <View style={s.textInputWrapper}>
          <TextInput
            style={[
              s.input,
              theme === 'dark' && { backgroundColor: colors.gray800, borderRadius: radius.base, color: colors.white },
            ]}
            autoCapitalize="none"
            placeholder={t('search:search')}
            spellCheck={false}
            onChangeText={handleChange}
          />
        </View>
      </View>
      {searchList?.length === 0 && usersList?.length === 0 && (
        <Text style={[{ alignItems: 'center', padding: 20 }]}>{t('search:not_found')}</Text>
      )}
      {input.length !== 0 && (
        <View>
          {loadingSearch && <HorizontalListSkeleton size="small" />}
          {searchList?.length !== 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'center', padding: 20 }}
            >
              {searchList?.map(i => (
                <View key={i.node.id} style={{ marginRight: 20 }}>
                  <Card item={i.node} size="small" />
                </View>
              ))}
            </ScrollView>
          )}
          {loadingUsers && <HorizontalListSkeleton size="small" />}
          {usersList?.length !== 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'center', padding: 20 }}
            >
              {usersList?.map(i => (
                <TouchableOpacity
                  key={i.node.id}
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.push('ProfileUser', {
                      user: i.node,
                    })
                  }
                >
                  <View style={{ marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar src={i.node.avatar} nickname={i.node.username} />
                    <View>
                      <Text style={[tBase, { paddingLeft: 10 }, theme === 'dark' ? whiteColor : darkColor]}>
                        {i.node.name}
                      </Text>
                      <Text style={[tBase, { paddingLeft: 10 }, theme === 'dark' ? whiteColor : darkColor]}>
                        @{i.node.username}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      )}

      {/* {input.length !== 0 && (
            <HorizontalCardList
              title={`${t('search:recommended')}`}
              data={recommended}
              size="small"
              handleEndReached={recommendedEndReached}
              loading={loadingRecommended}
            />
          )}
          {input.length !== 0 && (
            <ScrollView contentContainerStyle={s.contentContainer} horizontal showsHorizontalScrollIndicator={false}>
              {tagsMock.map(t => (
                <TouchableHighlight key={t.id} style={s.tag} underlayColor={colors.mainGray} onPress={() => {}}>
                  <Text>{t.title}</Text>
                </TouchableHighlight>
              ))}
            </ScrollView>
          )} */}
    </SafeAreaView>
  );
};
