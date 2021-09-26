import { useScrollToTop } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StatusBar, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import { Card, ModalControl, VerticalListSkeleton } from '_app/components';
import { PLATFORM } from '_app/constants';
import { OrderDirection, useCitiesQuery } from '_app/generated/graphql';
import { normalize } from '_app/utils/dimensions';
import { wait } from '_app/utils/helpers';

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
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'center', marginBottom: 20 }}
            >
              {loadingSearch && <VerticalListSkeleton />}
              {!loadingSearch && searchList?.length !== 0 ? (
                searchList?.map(i => (
                  <View key={i.node.id} style={{ marginBottom: 20 }}>
                    <Card item={i.node} size="full" />
                  </View>
                ))
              ) : (
                <Text>Not found</Text>
              )}
            </ScrollView>
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
