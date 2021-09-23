import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StatusBar, TouchableHighlight, ScrollView, SafeAreaView, TextInput } from 'react-native';

import { HorizontalCardList, ModalControl } from '_app/components';
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

  const {
    data: dataPopular,
    loading: loadingPopular,
    error: errorPopular,
  } = usePopularQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Asc,
      },
    },
  });

  useScrollToTop(ref);

  if (loadingPopular) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const popular = dataPopular?.popular;

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />

      <View style={s.containerWrap}>
        <View style={{ paddingHorizontal: normalize(20), marginBottom: normalize(10) }}>
          <View style={s.textInputWrapper}>
            <TextInput style={s.input} autoCapitalize="none" placeholder="Search" spellCheck={false} />
          </View>
        </View>

        {!loadingPopular && !errorPopular && (
          <HorizontalCardList title={`${t('search:recommended')}`} data={popular} size="small" />
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
