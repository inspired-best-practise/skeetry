import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, TouchableHighlight, ScrollView, TextInput } from 'react-native';

import { HorizontalCardList, ModalControl } from '_app/components';
import { PLATFORM } from '_app/constants';
import { usePopularQuery, OrderDirection } from '_app/generated/graphql';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

const tagsMock = [
  { id: '1', title: '🥾 Hiking' },
  { id: '2', title: '🛶 Kayaking' },
  { id: '3', title: '🎈 Ballooning' },
  { id: '4', title: '⛰️ Mountains' },
  { id: '15', title: '🧗🏼‍♂️ Rock climbing' },
  { id: '5', title: '🌋 Volcano' },
  { id: '6', title: '🏄🏻‍♂️ Surfing' },
  { id: '7', title: '🐦 Birding' },
  { id: '8', title: '🌊 Sea' },
  { id: '9', title: '⛷️ Skiing' },
  { id: '10', title: '🏌️ Golf' },
  { id: '11', title: '🏜️ Desert' },
  { id: '12', title: '⛵ Sail' },
  { id: '13', title: '🌳 Nature' },
  { id: '14', title: '🎣 Fishing' },
  { id: '16', title: '🔭 Star Gazing' },
];

export const AddChooserScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  const [recommended, setRecommended] = useState();

  const {
    data: dataRecommended,
    loading: loadingRecommended,
    error: errorRecommended,
    fetchMore: fetchMoreRecommended,
  } = usePopularQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Desc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (dataRecommended) {
      setRecommended(dataRecommended.popular.edges);
    }
  }, [dataRecommended]);

  const recommendedEndReached = async () => {
    if (recommended) {
      const lastRecommended = recommended[recommended.length - 1].node.id;
      const newData = await fetchMoreRecommended({
        variables: {
          first: 10,
          after: lastRecommended,
          orderBy: {
            direction: OrderDirection.Desc,
          },
        },
      });
      setRecommended(prevState => [...prevState, ...newData.data.popular.edges]);
    }
  };

  useScrollToTop(ref);

  return (
    <View style={s.container}>
      <StatusBar barStyle={PLATFORM.IS_IOS ? 'light-content' : 'dark-content'} animated translucent />
      {PLATFORM.IS_IOS && <ModalControl />}

      <View style={s.containerWrap}>
        <View style={{ paddingHorizontal: normalize(20), marginBottom: normalize(10) }}>
          <View style={s.textInputWrapper}>
            <TextInput style={s.input} autoCapitalize="none" placeholder="Search" spellCheck={false} />
          </View>
        </View>

        {!errorRecommended && (
          <HorizontalCardList
            title={`${t('search:recommended')}`}
            data={recommended}
            size="small"
            handleEndReached={recommendedEndReached}
            loading={loadingRecommended}
          />
        )}
        {/* Tags component */}
        <ScrollView contentContainerStyle={s.contentContainer} horizontal showsHorizontalScrollIndicator={false}>
          {tagsMock.map(t => (
            <TouchableHighlight key={t.id} style={s.tag} underlayColor="#DDDDDD" onPress={() => {}}>
              <Text>{t.title}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
        {/* Tags component end */}
      </View>
    </View>
  );
};
