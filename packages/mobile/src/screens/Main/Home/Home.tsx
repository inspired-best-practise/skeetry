import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import codePush from 'react-native-code-push';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HorizontalCardList } from '_app/components';
import { Categories } from '_app/components/Categories';
import { Stories } from '_app/components/Stories';
import { tTitle } from '_app/constants';
import {
  OrderDirection, // useNearbyQuery,
  usePopularQuery,
} from '_app/generated/graphql';

import { s } from './styles';

export const HomeScreen = () => {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  // const [nearby, setNearby] = useState();
  const [popular, setPopular] = useState();

  useScrollToTop(ref);

  // const {
  //   data: dataNearby,
  //   loading: loadingNearby,
  //   error: errorNearby,
  //   fetchMore: fetchMoreNearby,
  // } = useNearbyQuery({
  //   variables: {
  //     first: 10,
  //     orderBy: {
  //       direction: OrderDirection.Asc,
  //     },
  //   },
  //   notifyOnNetworkStatusChange: true,
  // });

  const {
    data: dataPopular,
    loading: loadingPopular,
    error: errorPopular,
    fetchMore: fetchMorePopular,
  } = usePopularQuery({
    variables: {
      first: 10,
      orderBy: {
        direction: OrderDirection.Desc,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  // useEffect(() => {
  //   if (dataNearby) {
  //     setNearby(dataNearby.nearby.edges);
  //   }
  // }, [dataNearby]);

  useEffect(() => {
    if (dataPopular) {
      setPopular(dataPopular.popular.edges);
    }
  }, [dataPopular]);

  // const nearbyEndReached = async () => {
  //   if (nearby) {
  //     const lastNearby = nearby[nearby.length - 1].node.id;
  //     const newData = await fetchMoreNearby({
  //       variables: {
  //         first: 10,
  //         after: lastNearby,
  //         orderBy: {
  //           direction: OrderDirection.Asc,
  //         },
  //       },
  //     });
  //     setNearby(prevState => [...prevState, ...newData.data.nearby.edges]);
  //   }
  // };

  const popularEndReached = async () => {
    if (popular) {
      const lastPopular = popular[popular.length - 1].node.id;
      console.log(popular[popular.length - 1]);
      const newData = await fetchMorePopular({
        variables: {
          first: 10,
          after: lastPopular,
          orderBy: {
            direction: OrderDirection.Desc,
          },
        },
      });
      setPopular(prevState => [...prevState, ...newData.data.popular.edges]);
    }
  };

  const onButtonPress = () => {
    codePush.sync({
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: ' Описание: ',
        mandatoryContinueButtonLabel: 'Продолжить',
        mandatoryUpdateMessage: 'Доступно обновление, которое необходимо установить!',
        optionalIgnoreButtonLabel: 'Игнорировать',
        optionalInstallButtonLabel: 'Установить',
        optionalUpdateMessage: 'Доступно обновление, вы желаете его установить?',
        title: 'Обновления доступны',
      },
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={tTitle}>Skeetry</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.main} ref={ref} scrollsToTop={true}>
        <Stories />
        <View style={[s.header, { marginBottom: 10 }]}>
          <TouchableOpacity onPress={onButtonPress}>
            <Text style={{ fontWeight: '600', color: 'blue' }}>Check for updates</Text>
          </TouchableOpacity>
        </View>
        <Categories />
        {/* {!errorNearby && (
          <HorizontalCardList
            title={`${t('home:nearby')}`}
            data={nearby}
            size="wide"
            handleEndReached={nearbyEndReached}
            loading={loadingNearby}
          />
        )} */}
        {!errorPopular && (
          <HorizontalCardList
            title={`${t('home:popular')}`}
            data={popular}
            size="wide"
            handleEndReached={popularEndReached}
            loading={loadingPopular}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
